'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressWinston = require('express-winston');

var _expressWinston2 = _interopRequireDefault(_expressWinston);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _logger = require('./utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: './.env' });

const app = (0, _express2.default)();

const port = process.env.PORT || process.env.APP_PORT;
const env = process.env.APP_ENV;

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use((0, _cors2.default)());

app.get('/', function (req, res, next) {
	res.send('index.html');
});

// Express Validator
app.use((0, _expressValidator2.default)({
	errorFormatter: function (param, msg, value) {
		var namespace = param.split('.'),
		    root = namespace.shift(),
		    formParam = root;

		while (namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	}
}));

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send('Missing authentication credentials.');
	}
});

app.use(_expressWinston2.default.logger({
	transports: [new _winston2.default.transports.Console({
		json: true,
		colorize: true
	})],
	meta: true, // optional: control whether you want to log the meta data about the request (default to true)
	msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
	expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
	colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
	ignoreRoute: function (req, res) {
		return false;
	} // optional: allows to skip some log messages based on request and/or response
}));

app.listen(port, err => {
	if (err) {
		_logger2.default.error(err);
		process.exit(1);
	}
	require('./utils/db');

	_fs2.default.readdirSync(_path2.default.join(__dirname, 'resources')).map(file => {
		require('./resources/' + file)(app);
	});

	_logger2.default.info(`app is now running on port ${port} in ${env} mode`);
});

module.exports = app;
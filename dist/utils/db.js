'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const db_name = process.env.DB_NAME;
const uri = `mongodb://${username}:${password}@ds215563.mlab.com:15563/${db_name}`;
const env = "dev";

const connection = _mongoose2.default.connect(uri);

connection.then(db => {
	_logger2.default.info(`Successfully connected to ${uri} MongoDB cluster in ${env} mode.`);
	return db;
}).catch(err => {
	if (err.message.code === 'ETIMEDOUT') {
		_logger2.default.info('Attempting to re-establish database connection.');
		_mongoose2.default.connect(uri);
	} else {
		_logger2.default.error('Error while attempting to connect to database:');
		_logger2.default.error(err);
	}
});

exports.default = connection;
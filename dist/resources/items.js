'use strict';

var _items = require('../controllers/items');

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = app => {
    app.route('/items').get(_items2.default.all);

    app.route('/items/add').post(_items2.default.add);

    app.route('/items/remove/:id').delete(_items2.default.remove);
};
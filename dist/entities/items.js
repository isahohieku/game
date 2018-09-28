'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ItemSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require('mongoose-timestamp');

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _mongooseStringQuery = require('mongoose-string-query');

var _mongooseStringQuery2 = _interopRequireDefault(_mongooseStringQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItemSchema = exports.ItemSchema = new _mongoose.Schema({
    //  define the necessary fields for your contact list
    item: {
        type: String,
        required: false,
        trim: true
    },
    category: {
        type: String,
        required: false
    }
}, { collection: process.env.COLLECTION });

ItemSchema.plugin(_mongooseTimestamp2.default);
ItemSchema.plugin(_mongooseStringQuery2.default);

exports.default = _mongoose2.default.model('Items', ItemSchema);
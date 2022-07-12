"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Business = new Schema({
    fullname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone_number: {
        type: String
    },
    email: {
        type: String
    },
    business_name: {
        type: String
    },
    business_address: {
        type: String
    },
    pib: {
        type: String
    },
    mb: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Business', Business, 'businesses');
//# sourceMappingURL=business.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    authentication: {
        password: {
            type: String,
            required: true
        },
        salt: {
            salt: String,
        },
        sessionToken: {
            type: String,
        }
    }
});
exports.UserModel = (0, mongoose_1.model)('user', UserSchema);
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUserByEmail = (email) => exports.UserModel.findOne({ email });
exports.getUserByEmail = getUserByEmail;
const getUserBySessionToken = (sessionToken) => exports.UserModel.findOne({
    'authentication.sessionToken': sessionToken,
});
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = (id) => exports.UserModel.findById(id);
exports.getUserById = getUserById;
const createUser = (values) => new exports.UserModel(values)
    .save()
    .then(user => user.toObject());
exports.createUser = createUser;
const deleteUserById = (id) => exports.UserModel.findOneAndDelete({ _id: id });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.updateUserById = updateUserById;
//# sourceMappingURL=users.js.map
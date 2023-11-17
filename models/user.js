const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        default: null
    },
    passwordHash: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: null,
    },
    store: {
        type: String,
        default: null,
    },
    openAt: {
        type: String,
        default: null,
    },
    closeAt: {
        type: String,
        default: null,
    }
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;
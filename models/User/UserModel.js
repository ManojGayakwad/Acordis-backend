const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: { type: String, default: "" },
    Password: { type: String, default: ""},
});

const User = mongoose.model('User', userSchema);
module.exports = User;
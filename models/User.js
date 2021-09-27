const { Schema, model, Types } = require('mongoose');
const Thought = require("./Thought");

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [thoughtText, createdAt, username, reactions],
        friends: [username, email]
    }
)

module.exports = User;
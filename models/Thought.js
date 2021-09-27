const { Schema, model, Types } = require('mongoose');
const dateformat = require('../utils/dateFormat');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            length: [1, 280]
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        }
    }
)

module.exports = Thought;
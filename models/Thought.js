const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            length: [1, 280]
        },
        createdAt: {
            
        }
    }
)

module.exports = Thought;
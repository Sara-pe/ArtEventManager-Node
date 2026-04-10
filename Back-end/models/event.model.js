const { Schema, model, Types } = require('mongoose');
const User = require('./user.model');

const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        at: {
            type: String,
            required: true,
            trim: true
        },

        date: {
            type: Date,
            required: true,
        },

        hour: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        createdBy: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        },

        interested: [{
            type: Types.ObjectId,
            ref: 'User'
        }],


        invitations: [
            {
                from: {
                    type: Types.ObjectId,
                    ref: 'User'
                },
                to: {
                    type: Types.ObjectId,
                    ref: 'User'
                },
                status: { type: String, enum: ['pending', 'accepted', 'declined'] }
            }
        ]
    },
    {
        collection: 'Event',
        timestamps: true
    });

const Event = model('Event', eventSchema);

module.exports = Event;
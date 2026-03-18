const { Schema, model, Types } = require('mongoose');

const Event = require('./event.model');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

         lastname: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            unique : true
        },

        password: {
            type: String,
            required: true,
            trim: true
        },

        role : {
            type : String,
            required : true,
            enum : ['User', 'Admin'], 
            default : 'User' 
        },

        friends: [{
            type: Types.ObjectId,
            ref: 'User'
        }],

        friendRequests: [
            {
                _id: { type: Types.ObjectId, default: () => new Types.ObjectId() },
                from: {
                    type: Types.ObjectId,
                    ref: 'User'
                },
                status: { type: String, enum: ['pending', 'accepted', 'declined'] }
            }
        ]
    },
    {
        collection: 'User',
        timestamps: true
    });

    // ref: 'User' as string, populate later

const User = model('User', userSchema);

module.exports = User;
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: string,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: string,
        require: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Must match email address']
    },
    thoughts: [{ref: 'Thought', type: Schema.Types.ObjectId}],
    friends: [{ref: 'User', type: Schema.Types.ObjectId,}]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

// create the User model using the PizzaSchema
const User = model('User', UserSchema)

// export the User model
module.exports = User;

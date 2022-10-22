const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/] //used regex to validate email 
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      //you can use virtuals to set multiple properties at once? 
      virtuals: true,
      //don't fully understand getters 
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;

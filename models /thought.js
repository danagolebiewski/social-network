const { Schema, model } = require('mongoose');
const thoughtSchema = require('./User');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query... add this? Didn't go over virtuals yet
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], //don't understand this one? just going off of mini project
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
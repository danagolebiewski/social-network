const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        return new Date(timestamp).toLocaleString;
    },
  },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  },
);

module.exports = reactionSchema;
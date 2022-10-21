const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
  {
    // assignmentId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
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
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts',
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = assignmentSchema;

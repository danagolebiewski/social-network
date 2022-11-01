// Require Thought Model
const { Thought, User } = require("../models");

// Set up thoughtController
const thoughtController = {
  // Create a new Thought
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(400).json(err));
  },

  // Get Thoughts
  getAllThoughts(req, res) {
    Thought.find()
      // sort users thoughts
      .sort({ createdAt: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get single user by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "No User with this particular ID!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update a current User by ID
  updateThought(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "No User with this particular ID!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.ThoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "No User with this particular ID!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  addReaction(req, res) {
    console.log(req.body),
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((dbThoughtData) => {
          if (!dbThoughtData) {
            return res
              .status(404)
              .json({ message: "No User with this particular ID!" });
          }
          res.json(dbThoughtData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
  },

  // Delete a current Friend
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: "No User with this particular ID!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

// Export module users controller
module.exports = thoughtController;

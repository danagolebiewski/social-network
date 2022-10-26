const router = require("express").Router();

const {
  createThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:ThoughtId/reaction")
  .post(addReaction);
  
// // /api/Thoughts/:ThoughtId/thoughts/reactions <post, delete>
router
  .route("/:ThoughtId/reaction/:reactionID")
  .delete(deleteReaction);

module.exports = router;

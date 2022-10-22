const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// // /api/Thoughts/:ThoughtId/thoughts/reactions <post, delete> 
router.route('/:UserId/reaction/:reactionID').post(addReaction).delete(deleteReaction);
// do we need this? It's in the readme but i'm not sure ... this route is definitely wrong

module.exports = router;

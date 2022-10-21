const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// /api/Users/:UserId/assignments
router.route('/:UserId/assignments').post(addAssignment);

// /api/Users/:UserId/assignments/:assignmentId
router.route('/:UserId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
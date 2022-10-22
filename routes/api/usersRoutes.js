const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/UserController');

// /api/Users < get, post>
router.route('/').get(getAllUsers).post(createUser);

// /api/Users/:UserId <Get, put, delete>
router.route('/:UserId').get(getSingleUser).put(updateUser).delete(deleteUser);
//do we need a userId in the user.js model file?

// /api/Users/:UserId/friends/:friendId <post, delete> 
router.route('/:UserId/friends/:friendID').post(addFriend).delete(deleteFriend);


module.exports = router;
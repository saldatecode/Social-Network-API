const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  deleteFriend,
  addfriends
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser)
//.delete(deleteUser);

router.route("/:userId/friends/:friend_id").post(addfriends).delete(deleteFriend)

module.exports = router;

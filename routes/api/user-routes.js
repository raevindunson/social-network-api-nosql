const router = require("express").Router();
const {
    getallUsers,
    getUserID,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require("../../controllers/user-controller");

router
    .route('/')

    
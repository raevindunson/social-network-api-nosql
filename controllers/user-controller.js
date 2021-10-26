const { User, Thought } = require("../models");

const userController = {
    getallUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts'
        })
    },
    getUserID({params}, res) {
        User.find({})
    },

    createUser({body}, res) {
        User.create({body}, res)
            .then((userData) => {
                res.json(userData)
        })
    },
    addFriend({body}, res) {

    },

    updateUser({ params, body}, res) {

    },

    deleteUser({ params}, res) {

    },
    deleteFriend({params}, res) {

    }
};

module.exports = userController;
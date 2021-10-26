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

    updateUser({ params, body}, res) {

    },

    deleteUser({ params}, res) {

    }
};

module.exports = usercontroller
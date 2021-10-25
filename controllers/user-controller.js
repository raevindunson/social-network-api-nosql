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
    }
}

module.exports = usercontroller
const { User, Thought } = require("../models");

const thoughtController = {
    findAllThoughts() {

    },
    findThoughtbyID() {

    },

    addThought({ params, body}, res) {
        Thought.create(body)
        .then((id) => {
            
        })
    },
    addReaction() {

    },

    updateThought({}) {

    },

    deleteThought() {

    },
    deleteReaction(){

    }
};

module.exports = thoughtController;
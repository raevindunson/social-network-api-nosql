const router = require("express").Router();

const {
    findAllThoughts,
    findThoughtbyID,
    addThought,
    addReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require("../../controllers/thoughts-controller")
const express = require("express");
const router = express.Router();

// Require controller modules
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const bookinstance_controller = require("../controllers/bookinstanceController");
const genre_controller = require("../controllers/genreController");

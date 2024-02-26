const express = require("express");

const router = express.Router();

const {greetPerson} = require('../controllers/auth')

router.post("/", greetPerson);

module.exports = router;

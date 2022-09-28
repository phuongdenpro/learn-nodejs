"use strict";

var express = require('express');

var router = express.Router();

var siteController = require('../controllers/site.controller');

router.get('/', siteController.home);
module.exports = router;
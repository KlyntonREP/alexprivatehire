const express = require('express');
const controller = require('../controller/controller')

router = express.Router();

router.get("/", controller.index);
router.get("/sitemap", controller.sitemap);
router.post("/sendMail", controller.submit)

module.exports = router;
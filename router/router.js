const express = require('express');
const controller = require('../controller/controller')

router = express.Router();

router.get("/", controller.index);
router.get('/sitemap.xml', function(req, res) {
    res.type('text/xml')
    res.send('../sitemap.xml');
});
router.post("/sendMail", controller.submit)

module.exports = router;
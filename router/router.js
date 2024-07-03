const express = require('express');
const controller = require('../controller/controller')

router = express.Router();

router.get("/", controller.index);
router.get('/sitemap.xml', function(req, res) {
    res.set('Content-Type', 'text/xml')
    res.sendFile(path.resolve('sitemap.xml'));
});
router.post("/sendMail", controller.submit)

module.exports = router;
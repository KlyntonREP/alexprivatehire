const express = require('express');
const controller = require('../controller/controller')

router = express.Router();

router.get("/", controller.index);
router.get('/sitemap.xml', function(req, res) {
    const op = {
        root: path.join(__dirname)
    };
    // sending file
    const gfgFile = 'sitemap.xml';
    res.sendFile(gfgFile, op, function (error) {
        if (error) {
            next(error);
        } else {
            console.log('File Sent is:', gfgFile);
        }
    });
});
router.post("/sendMail", controller.submit)

module.exports = router;
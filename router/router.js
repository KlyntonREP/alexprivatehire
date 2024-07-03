const express = require('express');
const controller = require('../controller/controller')

router = express.Router();

router.get("/", controller.index);
router.get('/sitemap.xml', function (req, res) {
    res.type('text/xml')
    res.send(
        `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
        <url>
        <loc>https://alexprivatehire.com/</loc>
        <lastmod>2024-07-02T05:47:57+00:00</lastmod>
        </url>
        </urlset>`);
});
router.get('/robots.txt', function (req, res) {
    res.type('text/xml')
    res.send(
        `User-agent: *
        Disallow: /private/
        Sitemap: https://alexprivatehire.com/sitemap.xml`);
});
router.post("/sendMail", controller.submit)

module.exports = router;
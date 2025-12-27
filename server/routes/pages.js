const express = require('express');
const path = require('path');
const router = express.Router();

// Serve main pages
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/about.html'));
});

router.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/services.html'));
});

router.get('/book', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/book.html'));
});

router.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/resources.html'));
});

router.get('/testimonials', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/testimonials.html'));
});

router.get('/thank-you', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/thank-you.html'));
});

module.exports = router;

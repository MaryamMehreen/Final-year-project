const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

router.post('/', alertController.createAlert);
router.get('/', alertController.getAllAlerts);

module.exports = router;

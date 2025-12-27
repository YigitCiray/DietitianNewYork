const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      consultationType,
      appointmentDate,
      appointmentTime,
      stripePaymentId,
      intakeData
    } = req.body;

    // Validate required fields
    if (!name || !email || !consultationType || !appointmentDate || !stripePaymentId) {
      return res.status(400).json({ 
        error: 'Missing required booking information' 
      });
    }

    // TODO: Save booking to Google Sheets
    // TODO: Create Google Calendar event
    // TODO: Send confirmation email

    res.status(200).json({ 
      success: true, 
      message: 'Booking confirmed' 
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ 
      error: 'Failed to process booking' 
    });
  }
});

module.exports = router;

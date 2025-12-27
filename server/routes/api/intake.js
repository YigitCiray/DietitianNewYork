const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      healthGoals,
      medicalConditions,
      medications,
      allergies,
      dietaryPreferences,
      cookingFrequency,
      biggestChallenges
    } = req.body;

    // Validate required fields
    if (!name || !email || !healthGoals) {
      return res.status(400).json({ 
        error: 'Missing required information' 
      });
    }

    // TODO: Save intake data to Google Sheets

    res.status(200).json({ 
      success: true, 
      message: 'Intake submitted successfully' 
    });
  } catch (error) {
    console.error('Intake error:', error);
    res.status(500).json({ 
      error: 'Failed to submit intake form' 
    });
  }
});

module.exports = router;

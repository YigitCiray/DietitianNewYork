const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // TODO: Fetch available slots from Google Calendar
    
    // Mock data
    const mockSlots = [
      {
        date: '2024-01-15',
        times: ['09:00', '14:00', '18:00']
      },
      {
        date: '2024-01-16',
        times: ['10:00', '15:00']
      }
    ];

    res.json({ slots: mockSlots });
  } catch (error) {
    console.error('Availability error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch availability' 
    });
  }
});

module.exports = router;

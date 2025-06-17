const School = require('../models/School');

exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const school = await School.create({ name, address, latitude, longitude });
    res.status(201).json({
      message: 'School added successfully',
      id: school.id
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLng = parseFloat(req.query.longitude);

    const schools = await School.findAll();
    const sorted = schools
      .map(school => ({
        ...school.dataValues,
        distance: Math.sqrt(
          Math.pow(userLat - school.latitude, 2) + Math.pow(userLng - school.longitude, 2)
        )
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

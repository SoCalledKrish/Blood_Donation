const express = require('express');
const bcrypt = require('bcryptjs');
const Donor = require('../models/donor');

const router = express.Router();

// Donor Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if donor exists
        const donor = await Donor.findOne({ where: { email } });
        if (!donor) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, donor.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

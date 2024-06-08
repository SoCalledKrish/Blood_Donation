const express = require('express');
const bcrypt = require('bcryptjs');
const Donor = require('../models/donor');

const router = express.Router();

// Donor Signup
router.post('/', async (req, res) => {
    try {
        const { Username, age, bloodGroup, address, phone, email, disease, password } = req.body;

        // Check if donor already exists
        const existingDonor = await Donor.findOne({ where: { email } });
        if (existingDonor) {
            return res.status(400).json({ message: "Donor already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new donor
        const newDonor = await Donor.create({ Username, age, bloodGroup, address, phone, email, disease, password: hashedPassword });
        
        res.status(201).json({ message: "Donor registered successfully", donor: newDonor });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = async(req, res) => {
    const { email, password } = req.body;

    try {

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: newUser.id, email: newUser.email, type: newUser.type }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        newUser.token = token;
        await newUser.save();
        newUser.password = null;

        return res.status(201).json({
            message: 'User registered successfully.',
            token,newUser
        });

    } catch (error) {
        console.error('Error during sign-up:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, type: user.type },
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        user.password = null;

        return res.status(200).json({
            message: 'Login successful.',
            token, user
        });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = {
    signUp, login
}
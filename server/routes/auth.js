import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import User, { findOne } from '../models/User';

const router = Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error creating user', error });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        const token = sign({ userId: user._id }, 'your_jwt_secret');
        res.send({ token });
    } catch (error) {
        res.status(400).send({ message: 'Error signing in', error });
    }
});

export default router;
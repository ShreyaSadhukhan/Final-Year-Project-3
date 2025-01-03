import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';
import workspaceRoutes from './routes/workspace';

const app = express();
const port = 3000

app.use(express.json());
app.use('/auth', authRoutes);
app.use(cors());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!', error: err.message });
});

mongoose.connect('mongodb://localhost:27017/workspaces', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.error('Error connecting to mongodb:', err);
    } else {
        console.log('Connected to mongodb');
    }       
});

app.get("/", (req, res) => {
    res.send("API Working");
});

app.use('/api/auth', authRoutes);
app.use('/api/workspace', workspaceRoutes);

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

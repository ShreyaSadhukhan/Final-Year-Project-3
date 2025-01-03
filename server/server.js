import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';
import workspaceRoutes from './routes/workspace';

const app = express();
const port = 3000

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get("/", (req, res) => {
    res.send("API Working");
});

app.use('/api/auth', authRoutes);
app.use('/api/workspace', workspaceRoutes);

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

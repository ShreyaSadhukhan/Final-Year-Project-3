import { Router } from 'express';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { verifyToken } from '../middleware/auth';

const router = Router();

router.post('/create-folder', verifyToken, (req, res) => {
    const { folderName } = req.body;
    const folderPath = join(__dirname, 'folders', folderName);

    if (!existsSync(folderPath)) {
        mkdirSync(folderPath);
        res.status(201).send({ message: 'Folder created successfully' });
    } else {
        res.status(400).send({ message: 'Folder already exists' });
    }
});

router.post('/create-form', verifyToken, (req, res) => {
    const { formName, formData } = req.body;
    const formPath = join(__dirname, 'forms', `${formName}.json`);

    if (!existsSync(formPath)) {
        writeFileSync(formPath, JSON.stringify(formData));
        res.status(201).send({ message: 'Form created successfully' });
    } else {
        res.status(400).send({ message: 'Form already exists' });
    }
});

export default router;
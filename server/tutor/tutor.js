import express from 'express';
import { PrismaInstance } from '../utils/prisma.js';       

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/tutor', async (req, res) => {

    const tutor = await client.tutor.findUniqueOrThrow({
        where: {
            user_name: req.body.user_name
        }
    })

    return res.send(tutor);
})

router.put('/tutor', async (req, res) => {
    const tutor = await client.tutor.update({
        where: {
            user_name: req.body.user_name
        },
        data: {
            ...req.body
        }
    })

    return res.send(tutor);
})

router.post('/tutor', async (req, res) => {

    const newTutor = await client.tutor.create({
        data: {
            ...req.body
        }
    })

    return res.send(newTutor);
})

export default router;
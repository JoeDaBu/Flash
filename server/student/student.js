import express from 'express';
import { PrismaInstance } from '../utils/prisma.js';

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/student', async (req, res) => {

    const student = await client.student.findUniqueOrThrow({
        where: {
            user_name: req.body.user_name
        }
    })

    return res.send(student);
})

router.put('/student', async (req, res) => {

    const student = await client.student.update({
        where: {
            user_name: req.body.user_name
        },
        data: {
            ...req.body
        }
    })

    return res.send(student);
})

router.post('/student', async (req, res) => {

    const newStudent = await client.student.create({
        data: {
            ...req.body
        }
    })

    return res.send(newStudent);
})

export default router;
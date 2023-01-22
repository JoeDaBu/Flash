import express from 'express';
import { getUser } from '../user.js';
import { PrismaInstance } from '../utils/prisma.js';

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/student', async (req, res) => {
    const data = getUser(req);

    const student = await client.student.findUniqueOrThrow({
        where: {
            user_name: data.user_name
        }
    })

    return res.send(student);
})

router.put('/student', async (req, res) => {
    const user = getUser(req);

    const student = await client.user.update({
        where: {
            user_name: user.user_name
        }
    })

    return res.send(student);
})

router.post('create_student', async (req, res) => {
    const response = createUserValidator.safeParse({
        ...req.body
    })

    if (!response.success) {
        return res.status(400).send(response.error);
    }

    const newStudent = await client.user.create({
        data: {
            ...data
        }
    })

    return res.send(newStudent);
})

export default router;
import express from 'express';
import { getUser } from '../user';
import { PrismaInstance } from '../utils/prisma';

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
    const userSession = getUser(req);

    const student = await client.user.update({
        where: {
            user_name: serSession.user_name
        }
    })

    return res.send(student);
})

export default router;
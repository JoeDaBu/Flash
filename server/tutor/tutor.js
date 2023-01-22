import express from 'express';
import { getUser } from '../user';
import { PrismaInstance } from '../utils/prisma';       

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/tutor', async (req, res) => {
    const data = getUser(req);

    const tutor = await client.tutor.findUniqueOrThrow({
        where: {
            user_name: data.user_name
        }
    })

    return res.send(tutor);
})

router.put('/tutor', async (req, res) => {
    const user = getUser(req);
    //const data = req.body;

    const tutor = await client.user.update({
        where: {
            user_name: user.user_name
        }
    })

    return res.send(tutor);
})

router.post('/create_tutor', async (req, res) => {
    const response = createUserValidator.safeParse({
        ...req.body
    })

    if (!response.success) {
        return res.status(400).send(response.error);
    }

    const newTutor = await client.user.create({
        data: {
            ...data
        }
    })

    return res.send(newTutor);
})

export default router;
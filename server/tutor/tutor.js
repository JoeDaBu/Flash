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

    return res.send(tutor)
})

router.put('/tutor', async (req, res) => {
    const userSession = getUser(req);
    //const data = req.body;

    const tutor = await client.user.upate({
        where: {
            user_name: userSession.user_name
        }
    })

    return res.send(tutor);
})

export default router;
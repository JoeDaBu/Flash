import express from 'express';
import { getListing } from '../listing.js';
import { PrismaInstance } from '../utils/prisma.js';   

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/listing', async (req, res) => {
    const data = getListing(req);

    const listing = await client.listing.findUniqueOrThrow({
        where: {
            listing_id: data.listing_id
        }
    })

    return res.send(listing);
})

router.put('/listing', async (req, res) => {
    const user = getListing(req);
    //const data = req.body;

    const listing = await client.listing.upate({
        where: {
            listing_id: user.listing_id
        }
    })

    return res.send(listing);
})

// router.post('/listing', async (req, res) => {
//     const response = createUserValidator.safeParse({
//         ...req.body
//     })

//     if (!response.success) {
//         return res.status(400).send(response.error);
//     }

//     const newListing = await client.listing.create({
//         data: {
//             ...data
//         }
//     })

//     return res.send(newListing);
// })

export default router;
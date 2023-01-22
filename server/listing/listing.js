import express from 'express';
import { course } from '../course/course.js';
import { getListing } from '../listing.js';
import { PrismaInstance } from '../utils/prisma.js';

const prismaInstance = new PrismaInstance();
prismaInstance.createInstance();

const client = prismaInstance.getInstance();

const router = express.Router();

router.get('/listing', async (req, res) => {
  const listing = await client.listing.findMany({
    // where: {
    //   listing_id: req.body.listing_id,
    // },
  });

  return res.send(listing);
});

router.put('/listing', async (req, res) => {
  //const data = req.body;

  const listing = await client.listing.upate({
    where: {
      listing_id: req.body.listing_id,
    },
    data: {
      ...req.body,
    },
  });

  return res.send(listing);
});

router.post('/listing', async (req, res) => {
  const newListing = await client.listing.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      lowest_price: req.body.lowest_price,
      highest_price: req.body.highest_price,
      preferred_location: req.body.preferred_location,
      preferred_time: req.body.preferred_time,
      fast: req.body.fast,
      course: {
        create: req.body.course,
      },
    },
  });

  return res.send(newListing);
});

export default router;

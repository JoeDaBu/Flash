import express from 'express';
import { courseBadgeListCreate, courseListCreate } from '../utils/helper.js';
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
    console.log("Test:\n", req.body)
    const basePref = req.body.preference
    const preference = await courseListCreate(basePref, client)
    const baseComCourses = req.body.completed_courses
    const completed_courses = await courseListCreate(baseComCourses, client)
    console.log("Test1:", completed_courses, preference)
    const baseCourseBadges = req.body.course_badge
    console.log("Test3:", baseCourseBadges)
    const course_badge = await courseBadgeListCreate(baseCourseBadges, client)

    const newTutor = await client.tutor.create({
        data: {
            user_name:req.body.user_name,
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            preference: {
                create: req.body.preference
            },
            year_level: req.body.year_level,
            completed_courses: {
                create: req.body.completed_courses
            },
            gpa: req.body.gpa,
            preferred_meetup: req.body.preferred_meetup,
            rate: req.body.rate,
            course_badge: {
                create: req.body.course_badge
            },
            phone_number: req.body.phone_number
        }
    })

    console.log("Test2:\n", req.body)
    return res.send(newTutor);
})

export default router;
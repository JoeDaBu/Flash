import { course } from "../course"
import { course_badge } from "../course_badge"

export const TutorProps = {
    user_name: 'user_name',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    preference: 'preference',
    year_level: 'year_level',
    completed_courses: 'completed_courses',
    gpa: 'gpa',
    preferred_meetup: 'preferred_meetup',
    rate: 'rate',
    course_badge: 'course_badge'
}

export var TutorType = {
    [TutorProps.user_name]: String,
    [TutorProps.first_name]: String,
    [TutorProps.last_name]: String,
    [TutorProps.email]: String,
    [TutorProps.password]: String,
    [TutorProps.preference]: course[], // to be fixed here
    [TutorProps.year_level]: Number,
    [TutorProps.completed_courses]: course[], // to be fixed here
    [TutorProps.gpa]: Number,
    [TutorProps.preferred_meetup]: String,
    [TutorProps.rate]: Number,
    [TutorProps.course_badge]: course_badge[] // to be fixed here
}
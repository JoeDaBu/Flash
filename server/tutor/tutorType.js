import { Course } from "../course/course"
import { courseTypeVal } from "../course/validate";
import { course_badge } from "../course_badge/course_badge"
import { courseBadgeTypeVal } from "../course_badge/validate";
import { ValidationError } from "../errors";

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
// const t = new TutorProps;

//parses the req.body from post api command into a tutor object
export function tutorParse(tutor) {
    console.log(tutor)

}

export function tutorTypeVal(tutor) {
    if (!(typeof(tutor.user_name) === String)) {
        return ValidationError("Incorrect User_Name Type")
    }
    if (!(typeof(tutor.first_name) === String)) {
        return ValidationError("Incorrect First_Name Type")
    }
    if (!(typeof(tutor.last_name) === String)) {
        return ValidationError("Incorrect Last_Name Type")
    }
    if (!(typeof(tutor.email) === String)) {
        return ValidationError("Incorrect Email Type")
    }
    if (!(typeof(tutor.password) === String)) {
        return ValidationError("Incorrect Password Type")
    }
    if (!(typeof(tutor.preferred_meetup) === String)) {
        return ValidationError("Incorrect Preferred Meetup Type")
    }
    if (!(typeof(tutor.year_level) === Number)) {
        return ValidationError("Incorrect Year Level Type")
    }
    if (!(typeof(tutor.gpa) === Number)) {
        return ValidationError("Incorrect GPA Type")
    }
    if (!(typeof(tutor.rate) === Number)) {
        return ValidationError("Incorrect Rate Type")
    }
    //This can be improved
    courseTypeVal(tutor.preference)
    courseTypeVal(tutor.completed_courses)
    courseBadgeTypeVal(tutor.course_badge)
}

// export const TutorType = {
//     [TutorProps.user_name]: String,
//     [TutorProps.first_name]: String,
//     [TutorProps.last_name]: String,
//     [TutorProps.email]: String,
//     [TutorProps.password]: String,
//     [TutorProps.preference]: Array<Course>, // to be fixed here
//     [TutorProps.year_level]: Number,
//     [TutorProps.completed_courses]: course[], // to be fixed here
//     [TutorProps.gpa]: Number,
//     [TutorProps.preferred_meetup]: String,
//     [TutorProps.rate]: Number,
//     [TutorProps.course_badge]: course_badge[] // to be fixed here
// }
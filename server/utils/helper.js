export async function courseBadgeListCreate(courseBadges, client) {
    var prepped = []
    for (const x of courseBadges) { 
        const course_badge = await client.courseBadge.create({
            data: {
                ...x
            }
        })
        prepped.push(course_badge)
    }
    return prepped
}

export async function courseListCreate(courses, client) {
    var prepped = []
    for (const x of courses) { 
        const course = await client.course.create({
            data: {
                ...x
            }
        })
        prepped.push(course)
    }
    return prepped
}
// async function preferenceCreate(courses, client) {
//     const prepped = await courseListCreate(courses, client)
//     const preference = await client.preference.create({
//         data: {
//             ...prepped
//         }
//     })
//     return preference
// }

// async function comCoursesCreate(courses, client) {
//     const prepped = await courseListCreate(courses, client)
//     const preference = await client.preference.create({
//         data: {
//             ...prepped
//         }
//     })
//     return preference
// }
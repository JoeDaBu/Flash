import React from 'react';
import { ProfileIcon } from '../components/ProfileIcon';

export const Profile = () => {
    const contact = true;

    const tutor = true;

    return (
        <div className="">
            <ProfileIcon />
            <p className="">John Doe</p>
            <p>example@email.com</p>
            {contact ? <p>123-456-7890</p> : null}
            {tutor ? (
                <div>
                    <p>Course Preference: FILLER</p>
                    <p>Year Level: 4</p>
                    <p>Completed Courses: CPSC 110, CPSC 210</p>
                    <p>Preferred Meetup Method: Zoom</p>
                    <p>Rate: $24/hr</p>
                    <p>Badges: YEEET</p>
                </div>
            ) : null}
        </div>
    );
};

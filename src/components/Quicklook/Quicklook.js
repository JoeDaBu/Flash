import React, { useEffect, useState } from 'react';
import { Badge } from '../Badge';
import { ProfileIcon } from '../ProfileIcon';
import { Cell } from './Cell';

export const Quicklook = () => {
  const [response, setResponse] = useState([]);

  const renderBadges = (subject) => {
    return <Badge subject={subject} />;
  };

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:1234/tutor', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResponse(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex shrink-0 bg-white shadow-lg ml-auto mr-0 rounded-lg w-max h-max">
      <div className="flex flex-col mx-5 gap-4 py-5">
        <div className="flex flex-col justify-center items-center gap-1">
          <ProfileIcon />
          <p className="font-bold text-primary-900 text-xl">
            {response.first_name + ' ' + response.last_name}
          </p>
          <div className="flex gap-4">
            {renderBadges('MATH')}
            {renderBadges('CPSC')}
            {renderBadges('ENG')}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <p className="font-extrabold">Public Details</p>
            <p className="text-info-600 text-xs">edit</p>
          </div>
          <div className="text-xs">
            <p>Preferred Contact Information: {response.phone_number}</p>
            <p>Preferred Meetup Method: {response.preferred_meetup}</p>
            <p>Rate: ${response.rate}/hr</p>
            <p>Year Level: {response.year_level}</p>
            {/* <p>Completed Courses: {response}</p> */}
            <p>Grade Point Average (GPA): {response.gpa}%</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-extrabold">Upcoming Sessions</p>
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-extrabold">Completed Sessions</p>
          <p className="text-info-600 text-xs">
            Your completed tutoring sessions will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

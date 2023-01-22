import React from 'react';
import { Badge } from './Badge';
import { ProfileIcon } from './ProfileIcon';

export const Quicklook = () => {
  const renderBadges = () => {
    return <Badge subject="MATH" />;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-lg ml-auto mr-0 rounded-lg w-1/4 h-max">
      <ProfileIcon />
      <p className="font-bold text-primary-900">John Doe</p>
      <div className="flex gap-4">
        {renderBadges()}
        {renderBadges()}
        {renderBadges()}
      </div>
      <div className="w-full px-5">
        <div className="publicDetails">
          <div className="flex justify-between items-center">
            <p className="font-extrabold">Public Details</p>
            <p className="text-info-600">edit</p>
          </div>
          <div className="text-xs">
            <p>Preferred Contact Information:</p>
            <p>Preferred Meetup Method:</p>
            <p>Rate:</p>
            <p>Year Level:</p>
            <p>Completed Courses:</p>
            <p>Grade Point Average (GPA):</p>
          </div>
        </div>
        <div className="upcomingSessions"></div>
      </div>
    </div>
  );
};

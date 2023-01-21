import React from 'react';
import { Badge } from './Badge';
import { ProfileIcon } from './ProfileIcon';

export const Quicklook = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-lg ml-auto mr-0 rounded-lg w-1/4 h-max">
      <ProfileIcon />
      <p className="font-bold text-primary-900">John Doe</p>
      <Badge subject="MATH" />
    </div>
  );
};

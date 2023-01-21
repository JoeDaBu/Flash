import React from 'react';
import { ProfileIcon } from './ProfileIcon';

export const Quicklook = () => {
  return (
    <div className="bg-white shadow-lg w-max ml-auto mr-0 p">
      <ProfileIcon />
      <p className="font-bold text-primary-900">John Doe</p>
      <p></p>
    </div>
  );
};

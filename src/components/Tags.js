import React from 'react';
import { BsCalculator } from 'react-icons/bs';

export const Tags = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-primary-700 w-max rounded-full">
        <div className="mx-2 my-1 inline-flex">
          <div className="mr-2 text-sm text-white">
            <BsCalculator />
          </div>
          <p className="font-bold text-white text-xs">MATH 102</p>
        </div>
      </div>
    </div>
  );
};

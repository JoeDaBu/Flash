import React from 'react';
import { renderIcon } from '../utils';

export const Tags = ({isCourse, label}) => {
  console.log(`Label: ${label}`)
  if (isCourse) {
    // const course = toString(label).split(" ")[0]
    // console.log(course)
    // {renderIcon(true, course)}
  }
  return (
    <div>
      <div className="flex items-center justify-center bg-primary-700 w-max rounded-full">
        <div className="mx-2 my-1 inline-flex">
          <div className="mr-2 text-sm text-white">
            {renderIcon(true, label)}
          </div>
          <p className="font-bold text-white text-xs">MATH 102</p>
        </div>
      </div>
    </div>
  );
};

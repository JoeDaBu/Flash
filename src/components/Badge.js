import React from 'react';
import { BsCalculator } from 'react-icons/bs';

export const Badge = (subject) => {
  return <div className="">{subject ? 'MATH' : <BsCalculator />}</div>;
};

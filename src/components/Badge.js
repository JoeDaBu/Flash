import React from 'react';
import { renderSubjectIcon } from '../utils';

export const Badge = (subject) => {
  console.log(subject);
  return (
    <div className="rounded-full bg-primary-200 w-min p-2">
      {renderSubjectIcon(subject)}
    </div>
  );
};

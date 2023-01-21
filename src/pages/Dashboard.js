import React from 'react';
import { Quicklook } from '../components/Quicklook';
import { Tags } from '../components/Tags';

export const Dashboard = () => {
  return (
    <div>
      <Tags />
      <Quicklook />
    </div>
  );
};

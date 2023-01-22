import React from 'react';
import { Quicklook } from '../components/Quicklook/Quicklook';
import { Cell } from '../components/Cell';

export const Dashboard = () => {
    return (
        <div className="flex gap-7">
            <Cell />
            <Quicklook />
        </div>
    );
};

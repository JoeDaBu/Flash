import React from 'react';
import { renderIcon } from '../utils';

export const Badge = (subject) => {
    return (
        <div className="rounded-full bg-primary-200 w-min p-2">
            {renderIcon(true, subject)}
        </div>
    );
};

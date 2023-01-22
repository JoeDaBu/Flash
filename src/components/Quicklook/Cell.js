import React from 'react';

export const Cell = () => {
    return (
        <div className="w-full p-2  bg-primary-100 rounded-lg">
            <div className="flex items-center justify-between font-bold text-xs">
                <p>CPSC 121 Session with Jimmy</p>
                <p className="text-warning-700">Tomorrow</p>
            </div>
        </div>
    );
};

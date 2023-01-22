import React from 'react';

export const Cell = ({label, when, fast}) => {
    return (
        <div className="w-full p-2  bg-primary-100 rounded-lg">
            <div className="flex items-center justify-between font-bold text-xs">
                <p>{label}</p>
                <p className={fast ? "text-danger-600" : "text-warning-600"}>{when}</p>
            </div>
        </div>
    );
};

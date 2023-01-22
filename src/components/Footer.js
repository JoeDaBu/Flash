import React from 'react';
import logo from '../assets/logo.svg';

export const Footer = () => {
    return (
        <div className="w-screen h-48 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 flex flex-col items-center justify-center gap-6 mt-20">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center">
                    <img
                        className="w-12 h-auto absolute"
                        src={logo}
                        alt="logo"
                    />
                    <div className="bg-white h-20 w-20 rounded-full shadow-lg"></div>
                </div>
                <p className="text-3xl font-bold text-white">Flash</p>
            </div>
            <p className="text-[#FFFFFF75]">
                @2023 Brian Ho, Doeun Kwon, Joe Bu, Edward Zou
            </p>
        </div>
    );
};

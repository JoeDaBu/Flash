import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { ProfileIcon } from './ProfileIcon';

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between my-5">
            <Link to="/">
                <img className="w-12 h-auto" src={Logo} alt="Logo" />
            </Link>
            <div className="flex gap-12 justify-center items-center font-bold text-primary-900 text-xl">
                <Link to="/reports">
                    <p>Reports</p>
                </Link>
                <Link to="/messages">
                    <p>Message</p>
                </Link>
                <Link to="/profile">
                    <ProfileIcon />
                </Link>
            </div>
        </div>
    );
};

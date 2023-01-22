import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between mt-8 mb-12">
            <Link to="/">
                <img className="w-12 h-auto" src={Logo} alt="Logo" />
            </Link>
            <div className="flex gap-10 justify-center items-center font-bold text-primary-900 text-xl">
                <FaSearch />
                <Link to="/messages">
                    <p>Message</p>
                </Link>
                <Link to="/reports">
                    <p>Reports</p>
                </Link>
            </div>
        </div>
    );
};

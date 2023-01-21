import React from 'react'
import Logo from "../assets/logo.svg"
import { ProfileIcon } from './ProfileIcon'

export const Navbar = () => {
  return (
    <div className="flex place-content-between">
        <img className='w-12 h-auto' src={Logo} alt="Logo" />
        <div className='flex gap-8'>
            <p>Reports</p>
            <p>Message</p>
            <ProfileIcon />
        </div>
    </div>
  )
}

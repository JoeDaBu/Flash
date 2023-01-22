import React from 'react'
import { Cell } from "../components/Cell.js";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsLightningCharge } from "react-icons/bs";

export const Listing = (fast) => {
    if (fast["fast"]) {
        return (
            <div className="flex flex-col bg-white shadow-lg w-full h-auto rounded-xl">
                <p className='inline-flex items-center m-5 text-lg text-primary-900 gap-3'>
                    <span className="text-xl"><HiOutlineBriefcase /></span><b>Job Listings</b>
                </p>
                <div className='flex flex-col mb-5 mx-5 gap-4'>
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 shadow-lg shadow-primary-900/30 w-full h-auto rounded-xl">
                <p className='inline-flex items-center m-5 text-lg text-white gap-3'>
                    <span className="text-xl"><BsLightningCharge /></span><b>Fast Listings</b>
                </p>
                <div className='flex flex-col mb-5 mx-5 gap-4'>
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
            </div>
        )
    }

}
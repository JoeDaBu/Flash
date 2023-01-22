import React, { useState, useEffect } from 'react';
import { Cell } from '../components/Cell.js';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { BsLightningCharge } from 'react-icons/bs';

export const Listing = (fast) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:1234/listing', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setResponse(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let fastListings = [];

  const sortFastListings = async () => {
    console.log(response);
    for (let i = 0; await response.length; i++) {
      if (response[i].fast === true) {
        fastListings.push(response[i]);
      }
    }
  };

  sortFastListings();

  let renderListings = [];

  const renderFastListings = () => {
    for (let i = 0; fastListings.length; i++) {
      renderListings.push(<Cell data={fastListings[i]} />);
    }
  };

  renderFastListings();

  console.log(renderListings);

  if (fast['fast']) {
    return (
      <div className="flex flex-col bg-white shadow-lg w-full h-auto rounded-xl">
        <p className="inline-flex items-center m-5 text-lg text-primary-900 gap-3">
          <span className="text-xl">
            <HiOutlineBriefcase />
          </span>
          <b>Job Listings</b>
        </p>
        <div className="flex flex-col mb-5 mx-5 gap-4">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col bg-gradient-to-b from-primary-500 via-primary-600 to-primary-700 shadow-lg shadow-primary-900/30 w-full h-auto rounded-xl">
        <p className="inline-flex items-center m-5 text-lg text-white gap-3">
          <span className="text-xl">
            <BsLightningCharge />
          </span>
          <b>Fast Listings</b>
        </p>
        <div className="flex flex-col mb-5 mx-5 gap-4">
          {renderListings.length > 0 ? renderListings : null}
        </div>
      </div>
    );
  }
};

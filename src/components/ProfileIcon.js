import React, { useState, useEffect } from 'react';

export const ProfileIcon = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:1234/tutor', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center bg-primary-500 rounded-full w-16 h-16 shadow-lg shadow-primary-500/20">
        <p className="font-bold text-white text-xl">
          {data
            ? data.first_name.charAt(0).concat(data.last_name.charAt(0))
            : 'Loading'}
        </p>
      </div>
    </div>
  );
};

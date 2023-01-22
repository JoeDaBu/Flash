import React, { useEffect, useState } from 'react';
import { useModalStore } from '../utils';
import { Tags } from '../components/Tags';

export const Modal = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeState = useModalStore((state) => state.toggleModal);

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
        console.log(data);
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

  const exitModal = () => {
    changeState();
  };

  return (
    <>
      {!loading ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className="z-50 bg-white w-2/3 h-2/3 rounded-xl p-10 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold text-primary-900">
                {response ? response[0].title : 'loading'}
              </p>
              <div className="flex gap-2">
                <Tags isCourse={true} label="MATH 103" />
                <Tags isCourse={false} label="$24/hr" />
                <Tags isCourse={false} label="ASAP" />
                <Tags isCourse={false} label="IKB" />
              </div>
              <p className="font-bold text-primary-900">Student: Brad Smith</p>
              <div className="text-primary-900">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at lectus hendrerit, sagittis diam vel, elementum magna. Donec
                  rutrum enim rhoncus tincidunt vehicula. Nam interdum placerat
                  tellus. Proin id leo vel tellus dignissim ullamcorper vel eget
                  justo. Suspendisse sodales, urna vitae pharetra volutpat,
                  libero ligula interdum massa, eu consectetur sapien augue at
                  diam. Suspendisse potenti. Etiam molestie gravida lorem eget
                  pulvinar. In at ex condimentum, sollicitudin sem quis, aliquam
                  tellus. In sed congue odio, vitae blandit sapien.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-primary-500 py-2 px-5 rounded-full shadow-lg text-white font-bold hover:scale-[1.05] transition-all">
                Accept Listing
              </button>
              <button className="bg-primary-500 py-2 px-5 rounded-full shadow-lg text-white font-bold hover:scale-[1.05] transition-all">
                Message Student
              </button>
            </div>
          </div>
          <div
            className="w-screen h-screen bg-[#00000035] fixed inset-0 z-40"
            onClick={exitModal}
          ></div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  );
};

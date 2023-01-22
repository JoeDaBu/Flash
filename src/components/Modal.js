import React from 'react';
import { useModalStore } from '../utils';
import { Tags } from '../components/Tags';

export const Modal = (data) => {
  const changeState = useModalStore((state) => state.toggleModal);

  const exitModal = () => {
    changeState();
  };

  return (
    <>
      {data ? (
        <div className="justify-center items-center flex fixed inset-0 z-50">
          <div className="z-50 bg-white w-2/3 rounded-xl p-10 flex flex-col gap-10 justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold text-primary-900">
                {data.data.data.title}
              </p>
              <div className="flex gap-2">
                {/* <Tags isCourse={true} label="MATH 103" /> */}
                <Tags
                  isCourse={false}
                  label={`$${data.data.data.lowest_price}/hr`}
                />
                <Tags isCourse={false} label={data.data.data.preferred_time} />
                <Tags
                  isCourse={false}
                  label={data.data.data.preferred_location}
                />
              </div>
              <p className="font-bold text-primary-900">Student: Brad Smith</p>
              <div className="text-primary-900">
                <p>{data.data.data.description}</p>
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
            className="bg-[#00000035] fixed inset-0 z-40"
            onClick={exitModal}
          ></div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  );
};

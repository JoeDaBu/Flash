import React from 'react';
import { Tags } from '../components/Tags';
import { useModalStore } from '../utils';
import { Modal } from './Modal';

export const Cell = (data) => {
  const modalState = useModalStore((state) => state.showModal);
  const changeState = useModalStore((state) => state.toggleModal);

  return (
    <>
      {modalState ? <Modal /> : null}
      <div onClick={changeState}>
        <div className="flex-col bg-primary-100 w-full rounded-xl pb-5 hover:scale-[1.01] transition-all cursor-pointer">
          <div className="m-5 mb-3 inline-flex text-primary-900">
            <p className="font-bold">Help with integrals</p>
          </div>
          <div className="my-5 mb-3 inline-flex gap-3">
            <Tags isCourse={true} label="MATH 103" />
            <Tags isCourse={false} label="$24/hr" />
            <Tags isCourse={false} label="ASAP" />
            <Tags isCourse={false} label="IKB" />
          </div>
          <div className="mx-5 text-primary-900">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              lectus hendrerit, sagittis diam vel, elementum magna. Donec rutrum
              enim rhoncus tincidunt vehicula. Nam interdum placerat tellus.
              Proin id leo vel tellus dignissim ullamcorper vel eget justo.
              Suspendisse sodales, urna vitae pharetra volutpat, libero ligula
              interdum massa, eu consectetur sapien augue at diam. Suspendisse
              potenti. Etiam molestie gravida lorem eget pulvinar. In at ex
              condimentum, sollicitudin sem quis, aliquam tellus. In sed congue
              odio, vitae blandit sapien.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

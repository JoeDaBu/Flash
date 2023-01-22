import React from 'react';
import { Tags } from '../components/Tags';
import { useModalStore } from '../utils';
import { Modal } from './Modal';

export const Cell = (data) => {
  const modalState = useModalStore((state) => state.showModal);
  const changeState = useModalStore((state) => state.toggleModal);

  return (
    <>
      {modalState ? <Modal data={data} /> : null}
      <div onClick={changeState}>
        <div className="flex-col bg-primary-100 w-full rounded-xl pb-5 hover:scale-[1.01] transition-all cursor-pointer">
          <div className="m-5 mb-3 inline-flex text-primary-900">
            <p className="font-bold">{data ? data.data.title : null}</p>
          </div>
          <div className="my-5 mb-3 inline-flex gap-3">
            {/* <Tags isCourse={true} label={data.data} /> */}
            <Tags isCourse={false} label={`$${data.data.lowest_price}/hr`} />
            <Tags isCourse={false} label={data.data.preferred_time} />
            <Tags isCourse={false} label={data.data.preferred_location} />
          </div>
          <div className="mx-5 text-primary-900">
            <p>{data ? data.data.description : null}</p>
          </div>
        </div>
      </div>
    </>
  );
};

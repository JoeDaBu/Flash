import React from 'react';
import { useModalStore } from '../utils';

export const Modal = () => {
  const modalState = useModalStore((state) => state.showModal);
  const changeState = useModalStore((state) => state.toggleModal);

  const exitModal = () => {
    changeState();
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
      <div className="z-50 bg-white w-2/3 h-2/3">YEEET</div>
      <div
        className="w-screen h-screen bg-[#00000035] fixed inset-0 z-40 "
        onClick={exitModal}
      ></div>
    </div>
  );
};

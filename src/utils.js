import { BsCalculator, BsCodeSlash } from 'react-icons/bs';
import { TfiThought } from 'react-icons/tfi';
import { HiLanguage, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineDollar } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';

import { create } from 'zustand';

export const icons = {
  courses: {
    MATH: <BsCalculator />,
    CPSC: <BsCodeSlash />,
    PHIL: <TfiThought />,
    ENGL: <HiLanguage />,
    ENG: <HiOutlineWrenchScrewdriver />,
  },
  location: <HiOutlineLocationMarker />,
  rate: <AiOutlineDollar />,
  time: <FiClock />,
};

export const renderIcon = (course, props) => {
  let iconOut;

  if (course) {
    if (typeof props === 'object') {
      iconOut = icons.courses[Object.values(props)[0]];
    } else if (typeof props === 'string') {
      iconOut = icons.courses[props];
    }
  } else if (props.includes('$')) {
    iconOut = icons.rate;
  } else if (props.includes(':') || props === 'ASAP') {
    iconOut = icons.time;
  } else {
    iconOut = icons.location;
  }

  return iconOut;
};

export const useModalStore = create((set) => ({
  showModal: false,
  toggleModal: () =>
    set((state) => ({
      showModal: !state.showModal,
    })),
}));

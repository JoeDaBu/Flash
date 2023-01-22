import { BsCalculator, BsCodeSlash } from 'react-icons/bs';
import { TfiThought } from 'react-icons/tfi';
import { HiLanguage, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import {GrLocation} from "react-icons/gr"
import {AiOutlineDollar} from "react-icons/ai"
import {CiClock2} from "react-icons/ci"

export const icons = {
  courses: {
    MATH: <BsCalculator />,
    CPSC: <BsCodeSlash />,
    PHIL: <TfiThought />,
    ENGL: <HiLanguage />,
    ENG: <HiOutlineWrenchScrewdriver />,
  },
  location: <GrLocation />,
  rate: <AiOutlineDollar />,
  time: <CiClock2 />
};

export const renderIcon = (course, props) => {
  let iconOut;

  // console.log(icons.courses[props]);

  if (course) {
    if (typeof props === 'object') {
      iconOut = icons.courses[Object.values(props)[0]];
    } else if (typeof props === 'string') {
      iconOut = icons.courses[props];
    }
  } else {
    iconOut = icons[props]
  }


  return iconOut;
};

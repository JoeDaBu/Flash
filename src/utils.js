import { BsCalculator, BsCodeSlash } from 'react-icons/bs';
import { TfiThought } from 'react-icons/tfi';
import { HiLanguage, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

export const subjectBadges = {
  MATH: <BsCalculator />,
  CPSC: <BsCodeSlash />,
  PHIL: <TfiThought />,
  ENGL: <HiLanguage />,
  ENG: <HiOutlineWrenchScrewdriver />,
};

export const renderSubjectIcon = (subject) => {
  if (subjectBadges[subject]) throw new Error('No subject found!');

  return subjectBadges[Object.values(subject)[0]];
};

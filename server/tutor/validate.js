import z from 'zod';
import { TutorType, TutorProps } from './tutorType';

export var CreateTutorParams = Omit<TutorType, TutorProps.user_name>
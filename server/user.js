// import { Request } from 'express';
export const getUser = (req) => {
    if (req.students) {
    return req.students;
  } else {
    throw new Error('No user found');
  }
}
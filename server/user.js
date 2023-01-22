// import { Request } from 'express';
export const getUser = (req) => {
    if (req.session.user) {
    return req.session.user;
  } else {
    throw new Error('No user found');
  }
}
import { TYPE_ENUMS } from '../constants';

export const getColor = ({ type }) => {
  if (type === TYPE_ENUMS.REST) {
    return 'linear-gradient(to left, #00c853, #b2ff59)';
  }
  if (type === TYPE_ENUMS.CONTRACTIONS) {
    return 'linear-gradient(to left, #a07aff, #d53a9d)';
  }
  if (type === TYPE_ENUMS.DEFAULT) {
    return 'linear-gradient(to left, #eee, #ccc)';
  }
  throw Error('getColor error! This case should happend');
};

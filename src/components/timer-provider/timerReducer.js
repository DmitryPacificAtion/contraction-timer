import { timerActions } from './timerActions';
import { TYPE_ENUMS } from '../../constants';

export const initialState = {
  type: TYPE_ENUMS.DEFAULT,
  list: [],
};

export function timerReducer(state, { type, payload }) {
  switch (type) {
    case timerActions.PUSH: {
      return initialState;
    }
    case timerActions.SET: {
      return {
        ...state,
        type: payload.type,
      };
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

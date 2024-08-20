import { timerActions } from './timerActions';
import { TYPE_ENUMS } from '../../constants';

export const initialState = {
  type: TYPE_ENUMS.DEFAULT,
  list: [],
};

export function timerReducer(state, { type, payload }) {
  switch (type) {
    case timerActions.RESET: {
      return initialState;
    }
    case timerActions.SET_REST: {
      const { time } = payload;
      const id = state.list.length + 1;
      return {
        type: TYPE_ENUMS.REST,
        list:
          time > 0
            ? [
                ...state.list,
                {
                  id,
                  time,
                  type: TYPE_ENUMS.CONTRACTIONS,
                },
              ]
            : state.list,
      };
    }
    case timerActions.SET_CONTRACTION: {
      const { time } = payload;
      const id = state.list.length + 1;

      return {
        type: TYPE_ENUMS.CONTRACTIONS,
        list:
          time > 0
            ? [
                ...state.list,
                {
                  id,
                  time,
                  type: TYPE_ENUMS.REST,
                },
              ]
            : state.list,
      };
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

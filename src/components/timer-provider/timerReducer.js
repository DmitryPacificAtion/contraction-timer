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
    case timerActions.SET: {
      const { time, type: rowType } = payload;
      const id = state.list.length + 1;
      console.log('rowType', rowType);
      return {
        type: payload.type,
        list: [
          ...state.list,
          {
            id,
            time,
            type: rowType,
          },
        ],
      };
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

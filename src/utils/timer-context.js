import { createContext } from 'react';
import { TYPE_ENUMS } from '../constants';

export const TimerContext = createContext(TYPE_ENUMS.DEFAULT);
export const TimerDispatchContext = createContext(null);

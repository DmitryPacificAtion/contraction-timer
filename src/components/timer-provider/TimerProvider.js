import { useContext, useReducer } from 'react';
import { initialState, timerReducer } from './timerReducer';
import { TimerContext, TimerDispatcher } from './TimerContext';

export function TimerProvider({ children }) {
  const [state, dispatch] = useReducer(timerReducer, initialState);
  return (
    <TimerContext.Provider value={state}>
      <TimerDispatcher.Provider value={dispatch}>
        {children}
      </TimerDispatcher.Provider>
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}

export function useTimerDispatch() {
  return useContext(TimerDispatcher);
}

import { useReducer, createContext } from 'react';
import { Login } from './';

const AuthContext = createContext(null);
const AuthDispatcher = createContext(null);

const initialState = {
  isAuth: false,
};

function authReducer(state, { type, payload }) {
  switch (type) {
    case 'SET': {
      return {
        isAuth: payload,
      };
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

export function AuthProvider({ children }) {
  const [{ isAuth }, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={isAuth}>
      <AuthDispatcher.Provider value={dispatch}>
        {isAuth ? { children } : <Login />}
      </AuthDispatcher.Provider>
    </AuthContext.Provider>
  );
}

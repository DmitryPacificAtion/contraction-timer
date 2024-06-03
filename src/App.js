import React from 'react';
import { Main } from './App.styled';
import { Timer, Table, TimerProvider } from './components';

function App() {
  return (
    <TimerProvider>
      <Main>
        <Timer />
        <Table />
      </Main>
    </TimerProvider>
  );
}

export default App;

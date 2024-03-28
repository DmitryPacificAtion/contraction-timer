import React from 'react';
import { Main } from './App.styled';
import { Timer, Table, TimerProvider } from './components';

function App() {
  return (
    <TimerProvider>
      <Main>
        <Timer />
        <Table
          list={[
            { id: 1, name: 'Відпочинок', time: '1:12', type: 'rest' },
            { id: 2, name: 'Потуги', time: '1:12', type: 'contractions' },
          ]}
        />
      </Main>
    </TimerProvider>
  );
}

export default App;

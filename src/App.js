import React from 'react';
import './app.scss';

import { Timer, Table } from './components';

function App() {
  return (
    <main>
      <Timer />
      <Table
        list={[
          { id: 1, name: 'Відпочинок', time: '1:12', type: 'rest' },
          { id: 2, name: 'Потуги', time: '1:12', type: 'contractions' },
        ]}
      />
    </main>
  );
}

export default App;

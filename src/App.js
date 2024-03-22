import React from 'react';
import './app.scss';

function App() {
  return (
    <main>
      <section class='first-screen none'>
        <div class='timer'>0:12</div>
        <div class='title'>Перейми</div>
        <button>Стоп</button>
      </section>
      <section class='second-screen none'>
        <div class='timer'>1:12</div>
        <div class='title'>Перейми</div>
        <button>Старт</button>
      </section>
      <table class='table-screen'>
        <tr>
          <td class='rest'>Відпочинок</td>
          <td class='rest'>1:12</td>
        </tr>
        <tr>
          <td class='contractions'>Перейми</td>
          <td class='contractions'>1:12</td>
        </tr>
        <tr>
          <td class='rest'>Відпочинок</td>
          <td class='rest'>1:12</td>
        </tr>
      </table>
    </main>
  );
}

export default App;

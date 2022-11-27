/* eslint-disable @typescript-eslint/no-unused-vars */ // <== as i am having some test code here.
/* eslint-disable @typescript-eslint/naming-convention */ // <== as i am having some test code here.
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './components/card';

import myData from '../public/decks/experiments/test-001.json';

function App() {
  const [count, setCount] = useState(0);
  // const cardAversMd = ' # Title\nlorem **ipsum** *React-Markdown* is **Awesome**';
  const cardAversMd_old = `


The lift coefficient ($C_L$) is a dimensionless coefficient.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

[Link][1]

⋮ more text here

[1]: http://b.org

 `;
  const cardReversMd_old = ` Präsens
| Syntax        | Description |
| :---          |       ----: |
| Ich bin       | Wir sind    |
| Du bist       | Ihr seid    |
| Er/Sie/Es ist | Sie sind    |



[Conjugation verb 'sein' in German](https://conjugator.reverso.net/conjugation-german-verb-sein.html)

(^link)

[^1]: Big note.
`;

  const cardAversMd = myData.cards[0].value.avers;
  const cardReversMd = myData.cards[0].value.reverse;
  // cardReversMd = cardAversMd_old;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((cnt) => cnt + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Card AversMarkdown={cardAversMd} ReverseMarkdown={cardReversMd} />
      {/* <img src="https://www.fillmurray.com/150/150" /> */}
      {/* <strong>BILL MURRAY</strong> */}
    </div>
  );
}

export default App;

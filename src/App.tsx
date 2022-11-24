import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './components/card';

function App() {
	const [count, setCount] = useState(0);
	// const cardAversMd =		' # Title\nlorem **ipsum** *React-Markdown* is **Awesome**';
	const cardAversMd = `# to be
	(verb)
	present time`;
	const cardReversMd = `This is the **back** of the card`;

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
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

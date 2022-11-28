import './App.css';
import { ThemeChanger } from './components/ThemeChanger';

export default function App() {
  return (
    <div className="App ">
      <ThemeChanger />
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

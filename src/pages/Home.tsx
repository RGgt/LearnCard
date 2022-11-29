import { Link } from 'react-router-dom';
import { ThemeChanger } from '../components/ThemeChanger';

export function Home() {
  return (
    <>
      <ThemeChanger />
      <h1>Hello world</h1>
      <Link to="/">GO HOME</Link>
      <br />
      <Link to="/tests">TESTS</Link>
    </>
  );
}

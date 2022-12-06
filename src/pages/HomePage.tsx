import { Link } from 'react-router-dom';
import { ThemeChanger } from '../components/ThemeChanger';

export function HomePage() {
  return (
    <>
      <ThemeChanger />
      <h1>Hello world!</h1>
      <Link to="/">GO HOME</Link>
      <br />
      <Link to="/cards/german-for-english/verbs-level-1/set-001">
        View set A
      </Link>
      <br />
      <Link to="/cards/spanish-for-english/verbs-level-1/set-001">
        View set B
      </Link>
      <br />
      <Link to="/tests">TESTS</Link> <br />
      <Link to="/experimental">ExperimentalPage</Link>
    </>
  );
}

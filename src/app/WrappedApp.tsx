import { HashRouter } from 'react-router-dom';
import { App } from './App';

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

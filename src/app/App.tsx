import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Tests } from '../pages/Test';
import { NotFound } from '../pages/NotFound';
import './App.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

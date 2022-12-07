import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { ExperimentalPage } from '../pages/ExperimentalPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import './App.css';
import { CardSetViewPage } from '../pages/CardSetViewPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cards/:topic/:collection/:hand"
        element={<CardSetViewPage />}
      />
      <Route path="/experimental" element={<ExperimentalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

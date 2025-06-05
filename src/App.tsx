// src/App.tsx
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import { PageTransition } from './components/layout/page-transition';

const App: React.FC = () => {
  return (
    <PageTransition>
      <Home />
    </PageTransition>
  );
};

export default App;

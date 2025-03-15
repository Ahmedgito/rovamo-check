import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { Navbar } from './components/layout/navbar';
import './index.css';
import { ScrollRestoration } from './components/layout/scroll-restoration';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <ScrollRestoration />
    </BrowserRouter>
  </React.StrictMode>
);

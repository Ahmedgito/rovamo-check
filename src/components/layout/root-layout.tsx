import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

export function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
} 
import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Layout from './Layout';
import { RouterProvider } from 'react-router-dom';
import router from './router/EliteRouter';

function App() {

  return (
      <RouterProvider router={router} />
  );
}

export default App

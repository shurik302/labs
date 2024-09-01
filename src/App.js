import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<><Home /></>} />
      </>
    )
  );

  return (
    <div className="App">
      <Header />
      <div className="content">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import LoginModal from './components/login-modal/login-modal';
import Maker from './components/maker/maker';

const App = ({ authService }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginModal authService={authService} />} />
        <Route path="/maker" element={<Maker />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

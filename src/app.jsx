import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import LoginModal from './components/login-modal/login-modal';
import Maker from './components/maker/maker';

const App = ({ FileInput, database, authService }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginModal authService={authService} />} />
        <Route
          path="/maker"
          element={
            <Maker
              FileInput={FileInput}
              database={database}
              authService={authService}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

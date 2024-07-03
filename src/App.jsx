import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import Header from './components/Header';
import Body from './components/Body';
import Generator from './pages/Generator';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Homepage route */}
          <Route path="/login" element={<Login />} />  {/* Login page route */}
          <Route path="/signup" element={<Signup />} />  {/* Signup page route */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;

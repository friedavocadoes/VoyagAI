import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Generator from './pages/Generator';
import Results from './pages/Results';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/Contact';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Body>
          <Routes>
            <Route path="/" element={<Homepage />} />  {/* Homepage route */}
            <Route path="/login" element={<Login />} />  {/* Login page route */}
            <Route path="/signup" element={<Signup />} />  {/* Signup page route */}
            <Route path="/about" element={<AboutUs />} />  {/* About Us page route */}
            <Route path="/contact" element={<ContactUs />} />  {/* Contact Us page route */}
          </Routes>
        </Body>
        <Routes>
          <Route
          path="/generator"
          element={
            <PrivateRoute>
              <Generator />
            </PrivateRoute>
          }
          />  {/* Generator page route */}
          <Route path="/results" element={<Results />} />  {/* Results page route */}
        </Routes>
        <Footer />
      </Header>
    </BrowserRouter>
  );
}

export default App;

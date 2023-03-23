import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './components/navbar';
import {
  Home, 
  Signup
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

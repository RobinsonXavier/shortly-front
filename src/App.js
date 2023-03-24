import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './components/navbar';
import {
  Home, 
  Signup,
  Signin
} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

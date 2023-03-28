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
import UserContext from './contexts/userContext';

function App() {
  const [config, setConfig] = React.useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{config, setConfig}}>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

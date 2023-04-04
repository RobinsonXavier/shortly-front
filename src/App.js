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
import Ranking from './components/ranking';

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
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

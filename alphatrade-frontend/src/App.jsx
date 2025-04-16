import { useState } from 'react'
// import Login from './components/login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import About from  './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Market from './components/Market.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  
  const [user, setUser] = useState({
user: '',
isLoggedIn: false
  });

const handleLogout = () => {
  setUser((prevState) => ({
    ...prevState,
    isLoggedIn: false 
  }));

};



/*
{
  "user": "username",
  "isLoggedIn": true

  This shows if the use is logged in show the show the dashboard else give a error message
}
*/
  return (
    <>
    <Router>
      {user.isLoggedIn && <Navbar onLogout = {handleLogout} />}
      <Routes>
        <Route path="/" element={user.isLoggedIn ? <Portfolio /> : <Login setUserInParentComponent={setUser} />} />
        <Route path="/about" element={user.isLoggedIn ? <About /> : <Login setUserInParentComponent={setUser} />} />
        <Route path="/market" element={user.isLoggedIn ? <Market /> : <Login setUserInParentComponent={setUser} />}  />
        <Route path="/portfolio" element={user.isLoggedIn ? <Portfolio /> : <Login setUserInParentComponent={setUser} />}  />
      </Routes>
    </Router>
    </>
  )
}

export default App;

import { useState } from 'react'
// import Login from './components/login/Login';
import Login from './components/login/Login';




function App() {
  
  const [user, setUser] = useState({
user: '',
isLoggedIn: false
  });

/*
{
  "user": "username",
  "isLoggedIn": true

  This shows if the use is logged in show the show the dashboard else give a error message
}
*/
  return (
    <>
    {user.isLoggedIn && <h1>Hello World</h1>}
    {!user.isLoggedIn && <Login setUserInParentComponent = {setUser}/>}
   
    </>
  )
}

export default App;

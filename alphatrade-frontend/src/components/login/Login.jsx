import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../../style/login.css';

const Login = ({setUserInParentComponent}) => {
   
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');

   const login = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
        setUserInParentComponent(prevState => ({
            ...prevState,
            user: username,
            isLoggedIn: true
        }));
    } else {
        toast.error('Login Failed', {
            autoClose:false,
        });

    }

   };
   

   return( <>
     <div className="signin-body"> 
        <div class="signin-container">
        <h1>Sign-in</h1>
        <form onSubmit={login} > 
            <label > Username </label>
            <input type="text" id="Email" name="Email"  onChange={(event) => setUsername(event.target.value)}/>
            <label > Password</label>
            <input type="password" id="Password" name="Password" onChange = {(e) => setPassword(e.target.value) } />
            <input type="submit" value="Sign in" />
        </form>
       </div>
       <ToastContainer />
    </div>   
</>  );
}

export default Login;
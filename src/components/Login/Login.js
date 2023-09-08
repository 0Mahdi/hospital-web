import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from =location.state?.from.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' required placeholder='Enter Your Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' required placeholder='Password' />
                </div>
                <input className='btn-submit' type='submit' value="Login" />
            </form>
            <p><small>New to Apollo-Web? <Link to='/register'>Create New Account</Link></small></p>
            <div>-----------or-----------</div>
            <button className='btn-regular'>Google Sign In</button>
        </div>
    );
};

export default Login;


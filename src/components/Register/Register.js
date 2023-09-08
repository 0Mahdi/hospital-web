import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        setError('');
        if (password !== confirm) {
            setError('Your Password did not match')
            return
        }
        else if(password.length < 6){
            setError('password must be 6 characters or longer')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Register</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' required placeholder='Enter Your Email'/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' required placeholder='Password'/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type='password' name='confirm' required placeholder='Password'/>
                </div>
                <input className='btn-submit' type='submit' value="Register" />
            </form>
            <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Register;
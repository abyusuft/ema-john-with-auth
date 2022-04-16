import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>login</h2>
                <form onSubmit={handleUserSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {loading && <p>Loading...</p>}
                <p>New to Ema-Johan <Link className='form-link' to="/signup">Create an Account</Link></p>
                <hr />
                <button className='form-submit' > Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;
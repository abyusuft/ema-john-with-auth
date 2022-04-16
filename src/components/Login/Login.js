import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p>New to Ema-Johan <Link className='form-link' to="/signup">Create an Account</Link></p>
                <hr />
                <button className='form-submit' > Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;
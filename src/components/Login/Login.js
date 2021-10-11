import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/usseAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handelGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                // console.log(result.user);
                history.push(redirect_uri)
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your Email" />
                    <br />
                    <input type="password" name="" placeholder="Enter your Password" id="" />
                </form>
                <h4>New in ema-jhon?  <Link to="register">Create Account</Link> </h4>
                <div>-----------or-----------</div>
                <button
                    className="btn-regular"
                    onClick={handelGoogleLogin}
                    type="submit"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
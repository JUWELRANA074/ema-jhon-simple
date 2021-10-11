import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/usseAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <div className="header">

            <img className="logo" src={logo} alt="" />

            <nav>
                <NavLink to="/shop"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                > Shop </NavLink>
                <NavLink to="/review"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                > Order Review </NavLink>
                <NavLink to="/inventory"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                > Manage Inventory </NavLink>

                {
                    user.email &&
                    <span style={{ color: 'white' }} > Hello {user.displayName}</span>
                }
                {
                    user.email ?
                        <button onClick={logOut} >Log Out</button>
                        :
                        <NavLink to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        > Login </NavLink>
                }
            </nav>

        </div>
    );
};

export default Header;
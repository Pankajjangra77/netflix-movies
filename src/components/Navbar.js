import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar() {
    return (
        <>
        <div className="navbar">
        <div className="navbar__right">
            <NavLink to="/">
             <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
            </NavLink>
        
            <NavLink to="/" className="nav__links">
                Home
            </NavLink>
            <NavLink to="/tv-shows" className="nav__links">
                TVShows
            </NavLink>
            <NavLink to="/movies" className="nav__links">
                Movies
            </NavLink>
            <NavLink to="/new-and-popular" className="nav__links">
                New & Popular
            </NavLink>
        </div>

        <div className="navbar__left">
            <div className="left__icon">
            <SearchIcon />
            </div>
             <div className="left__icon">
                <CardGiftcardIcon />
             </div>
            <div className="left__icon">
                <NotificationsIcon />
            </div>
            <div className="left__icon">
                <AccountCircleIcon />
            </div>
        </div>
        </div>
     </>
    )
}

export default Navbar

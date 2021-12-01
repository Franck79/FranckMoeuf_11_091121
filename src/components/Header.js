import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LOGO.png';

class Header extends Component {
    render() {
        const {pathname} = window.location;
        const isAboutActive = pathname.includes("about");

        return (
            <header className="header">
                <div className="header__logo">
                    <img src={Logo} alt="Logo_Kasa" />
                </div>
                <div className="header__navigation">
                    <NavLink exact to="/" className={`link ${!isAboutActive ? "nav-active":""} `}>Accueil</NavLink>
                    <NavLink exact to="about" className={`link ${isAboutActive ? "nav-active":""} `}>A propos</NavLink>
                </div>
            </header>
        );
    }
};

export default Header;
import React, { Component } from 'react';
import FooterLogo from '../assets/LOGO_Footer.png'
import FooterText from '../assets/Text_Footer.png'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <img className="footer__logo" src={FooterLogo} alt="Logo_Footer" />
                <img className="footer__text" src={FooterText} alt="Texte_Footer" />
            </footer>
        );
    }
};

export default Footer;
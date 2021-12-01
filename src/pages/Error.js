import Header from '../components/Header';
import Footer from '../components/Footer';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {

    render() {
        
        return (
            <>
                <Header />
                <div className="error">
                    <p className="error__title">404</p>
                    <p className="error__text">Oups! La page que 
                        vous demandez n'existe pas.
                    </p>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
                <Footer />
            </>
        )
    }

}

export default Error;
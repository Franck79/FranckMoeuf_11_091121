import Header from '../components/Header';
import Footer from '../components/Footer';
import { Component } from 'react';

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
                </div>
                <Footer />
            </>
        )
    }

}

export default Error;
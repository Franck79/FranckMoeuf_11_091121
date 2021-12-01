import React, { Component } from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

class Home extends Component {

    render() {
        
        return (
            <>
                <Header />
                <Banner />
                <Gallery />
                <Footer />
            </>
        );
    }
    
};

export default Home;
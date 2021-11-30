import React, { Component } from 'react';
import Header from '../components/Header';
import CollapseProfil from '../components/CollapseProfil';
import AppartmentProfil from '../components/AppartmentProfil';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

class Property extends Component {
    render() {
        //const {id} = this.props.match.params;
        //console.log(this.props);
        return (
            <>
                <Header />
                <Carousel />
                <AppartmentProfil />
                <section className="sectionText">
                    <CollapseProfil title="Description" />
                    <CollapseProfil title="Équipements" />
                </section>
                <Footer />
            </>
        );
    }
};

export default Property;
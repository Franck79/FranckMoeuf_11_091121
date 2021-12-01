import React, { Component } from 'react';
import Header from '../components/Header';
import Collapse from '../components/Collapse';
import AppartmentProfil from '../components/AppartmentProfil';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import datas from '../data/Kasa.json';
class Property extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const logement = datas.find(data => data.id === id)
        return (
            <>
                <Header />
                <Carousel />
                <AppartmentProfil />
                <section className="sectionText">
                    <Collapse title="Description"
                                content={(
                                    <div className="profil__text">
                                        {logement.description}
                                    </div>
                                )}/>
                    <Collapse title="Équipements" isDefaultOpen 
                                content={(
                                    <ul className="profil__text">
                                    {logement.equipments.map((equipment) => {
                                        return (
                                            <li>
                                                {equipment}
                                            </li>
                                        )
                                    })}
                                    </ul>
                                )}/>
                </section>
                <Footer />
            </>
        );
    }
};

export default Property;
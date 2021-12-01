import { Component } from "react";
import Header from '../components/Header';
import BannerAbout from '../components/BannerAbout';
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

class About extends Component {
    render() {
        return (
            <>
                <Header />
                <BannerAbout />
                <section className="sectionCollapse">
                    <Collapse title="Fiabilité" 
                                content={(
                                    <div className="collapse__text">
                                        Les annonces postées sur Kasa garantissent une fiabilité totale. 
                                        Les photos sont conformes aux logements, 
                                        et toutes les informations sont régulièrement 
                                        vérifiées par nos équipes.
                                    </div>)} />
                    <Collapse title="Respect" isDefaultOpen
                                content={(
                                    <div className="collapse__text">
                                        La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                        Tout comportement discriminatoire ou de perturbation du voisinage 
                                        entraînera une exclusion de notre plateforme.
                                    </div>
                                )} />
                    <Collapse title="Service" 
                                content={(
                                    <div className="collapse__text">
                                        Nos équipes se tiennent à votre disposition pour vous fournir 
                                        une expérience parfaite. N'hésitez pas à nous contacter 
                                        si vous avez la moindre question.
                                    </div>
                                )} />
                    <Collapse title="Responsabilité" 
                                content={(
                                    <div className="collapse__text">
                                        La sécurité est la priorité de Kasa. 
                                        Aussi bien pour nos hôtes que pour les voyageurs, 
                                        chaque logement correspond aux critères de sécurité établis par nos services. 
                                        En laissant une note aussi bien à l'hôte qu'au locataire, 
                                        cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                                    </div>
                                )}/>
                </section>
                <Footer />
            </>
        )
    }
}

export default About;
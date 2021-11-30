import { Component } from "react";
import ChevronDown from '../assets/ChevronDown.png';
import ChevronUp from '../assets/ChevronUp.png';

class Collapse extends Component {
    constructor(props) {
        super(props)
        this.state = {isOpen: false}

        if (this.props.title === "Respect") {
            this.state.isOpen = true;
        }
    }
    render() {
        return (
            <div className="collapse">
                <button onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                    <div className="title">{this.props.title}</div>
                    {this.state.isOpen === false && (
                        <img src={ChevronDown} alt="chevron_down" />
                    )}
                    {this.state.isOpen === true && (
                        <img src={ChevronUp} alt="chevron_down" />
                    )}
                </button>
                {this.state.isOpen === true && this.props.title === "Fiabilité" && (
                    <div className="collapse__text">
                            Les annonces postées sur Kasa garantissent une fiabilité totale. 
                            Les photos sont conformes aux logements, 
                            et toutes les informations sont régulièrement 
                            vérifiées par nos équipes.
                    </div>
                )}
                {this.state.isOpen === true && this.props.title === "Respect" && (
                    <div className="collapse__text">
                            La bienveillance fait partie des valeurs fondatrices de Kasa. 
                            Tout comportement discriminatoire ou de perturbation du voisinage 
                            entraînera une exclusion de notre plateforme.
                    </div>
                )}
                {this.state.isOpen === true && this.props.title === "Service" && (
                    <div className="collapse__text">
                            Nos équipes se tiennent à votre disposition pour vous fournir 
                            une expérience parfaite. N'hésitez pas à nous contacter 
                            si vous avez la moindre question.
                    </div>
                )}
                {this.state.isOpen === true && this.props.title === "Responsabilité" && (
                    
                    <div className="collapse__text">
                            La sécurité est la priorité de Kasa. 
                            Aussi bien pour nos hôtes que pour les voyageurs, 
                            chaque logement correspond aux critères de sécurité établis par nos services. 
                            En laissant une note aussi bien à l'hôte qu'au locataire, 
                            cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </div>
                )}
            </div>
        )
    }
}

export default Collapse;
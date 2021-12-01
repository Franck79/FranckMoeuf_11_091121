import { Component } from "react";
import ChevronDown from '../assets/ChevronDown.png';
import ChevronUp from '../assets/ChevronUp.png';

class Collapse extends Component {

    constructor(props) {

        super(props)
        // Textes cachés par défaut.
        this.state = {isOpen: false}
        // Props pour les textes qui sont affichés par défaut.
        if (props.isDefaultOpen) {

            this.state.isOpen = true;

        }
    }

    render() {
        // On récupère le pathname afin de switcher de classe css
        // selon la page About ou Profil de l'annonce.
        const {pathname} = window.location;
        const isLogmentActive = pathname.includes("logement");
        
        return (
            <div className={`link ${isLogmentActive && pathname !== "/logement/about"
                                ? "collapseProfil":"collapse"}`}>
                <button className={`link ${isLogmentActive && pathname !== "/logement/about"
                                ? "profil__button":""}`} 
                            onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                    <div className="title">{this.props.title}</div>
                    {this.state.isOpen === false && (
                        <img src={ChevronDown} alt="chevron_down" />
                    )}
                    {this.state.isOpen === true && (
                        <img src={ChevronUp} alt="chevron_down" />
                    )}
                </button>
                {this.state.isOpen === true && (this.props.content)}
            </div>
        )
    }
}

export default Collapse;
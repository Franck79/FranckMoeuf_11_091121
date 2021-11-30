import { Component } from "react";
import ChevronDown from '../assets/ChevronDown.png';
import ChevronUp from '../assets/ChevronUp.png';
import datas from '../data/Kasa.json';

class CollapseProfil extends Component {
    constructor(props) {
        super(props)
        this.state = {isOpen: false}

        if (this.props.title === "Équipements") {
            this.state.isOpen = true;
        }
    }
    render() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const logement = datas.find(data => data.id === id)
        return (
            <div className="collapseProfil">
                <button className="profil__button" onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                    <div className="title">{this.props.title}</div>
                    {this.state.isOpen === false && (
                        <img src={ChevronDown} alt="chevron_down" />
                    )}
                    {this.state.isOpen === true && (
                        <img src={ChevronUp} alt="chevron_down" />
                    )}
                </button>
                    {this.state.isOpen === true && this.props.title === "Description" && (
                        <div className="profil__text">
                                {logement.description}
                        </div>
                    )}
                    {this.state.isOpen === true && this.props.title === "Équipements" && (
                        <ul className="profil__text">
                            {logement.equipments.map((equipment) => {
                                return (
                                    <li>
                                        {equipment}
                                    </li>
                                )
                            })}
                        </ul>
                        
                        
                    )}
            </div>
        )
    }
}

export default CollapseProfil;
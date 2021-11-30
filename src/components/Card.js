import { Component } from "react";
import Datas from '../data/Kasa.json';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        return (
            <>
                {
                    Datas.map(data => (
                                    <Link to={`/logement?id=${data.id}`} className="card" key={data.id}>
                                        <p>{data.title}</p>
                                        <img src={data.cover} alt="card_cover" />
                                    </Link>
                                    ))
                }
            </>
        );
    }
}

export default Card;
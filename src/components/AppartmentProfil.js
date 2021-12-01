import { Component } from "react";
import datas from '../data/Kasa.json';
import StarFilled from '../assets/Star_filled.png';
import StartUnfilled from '../assets/Star_unfilled.png';

class AppartmentProfil extends Component {
    render() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const logement = datas.find(data => data.id === id);
        const ratingCount = logement.rating;
        // On sépare Nom et prénom de l'agent
        const hostFirstName = logement.host.name.substr(0,logement.host.name.indexOf(' '));
        const hostLastName = logement.host.name.substr(logement.host.name.indexOf(' ')+1);
        // Initalisation des array pour les étoiles pleines et vides.
        const ratingFilled = [];
        const ratingUnfilled = [];
        const ratingMax = 5;

        // Full stars display
        for (let i = 1; i <= ratingCount; i++) {

            ratingFilled.push(<span key={`start-${i}`}><img src={StarFilled} alt="star_filled" /></span>);
            
        }
        // Empty rating stars display
        if (ratingCount < 5) {

            let starUnfilled = ratingMax - ratingCount;
            
            for (let i = 1;i <= starUnfilled;i++) {

                ratingUnfilled.push(<span><img src={StartUnfilled} alt="star_unfilled" /></span>);

            }
        }
        
        return (
            <>
                <section className="property" key={logement.id}>
                    <article className="property__title">
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </article>
                    <article className="property__tags">
                        {logement.tags.map((tag) => {
                            return (
                                <span className="tag">
                                    {tag}
                                </span>
                            )
                        })}
                    </article>
                    <article className="property__ratingHost">
                        <div className="rating">
                            {ratingFilled}
                            {ratingUnfilled}
                        </div>
                        <div className="host">
                            <div className="host__name">
                                <span>{hostFirstName}</span>
                                <span>{hostLastName}</span>
                            </div>
                            
                            <div className="host__picture">
                                <img src={logement.host.picture} alt="host_picture" />
                            </div>
                        </div>
                        
                    </article>
                </section>
            </>
        );
    }
}

export default AppartmentProfil;
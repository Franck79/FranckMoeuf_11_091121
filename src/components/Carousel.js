import { Component } from "react";
import datas from '../data/Kasa.json';
import arrowRight from '../assets/ArrowRight.png';
import arrowLeft from '../assets/ArrowLeft.png';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexImageDisplayed: 0
        }
    }
    render() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const logement = datas.find(data => data.id === id)
        const countPictures = logement.pictures.length - 1;

        if (this.state.indexImageDisplayed > countPictures) {

            this.setState({indexImageDisplayed : 0});

        }

        return (
            <>
                <div className="carousel">
                    <button className="carousel__arrowRight" 
                            onClick={() => 
                                this.setState({indexImageDisplayed: this.state.indexImageDisplayed +1})}>
                        <img src={arrowRight} alt="arrow_right" />
                    </button>
                    <button className="carousel__arrowLeft"
                            onClick={() => {
                                this.setState({indexImageDisplayed: this.state.indexImageDisplayed -1})
                                if (this.state.indexImageDisplayed === 0) {
                                    this.setState({indexImageDisplayed : countPictures});
                                }
                            }}>
                        <img src={arrowLeft} alt="arrow_left" />
                    </button>
                    <img src={logement.pictures[this.state.indexImageDisplayed]} alt="pictures_carousel" />
                </div>
            </>
        )
    }
}

export default Carousel;
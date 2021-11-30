import { Component } from "react";
import BannerImage from '../assets/Banner.png';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={BannerImage} alt="banner_image" />
            </div>
        );
    }
}

export default Banner;
import { Component } from "react";
import BannerAboutImg from '../assets/Banner_About.png';

class BannerAbout extends Component {
    render() {
        return (
            <div className="bannerAbout">
                <img src={BannerAboutImg} alt="banner_about" />
            </div>
        );
    }
}

export default BannerAbout;
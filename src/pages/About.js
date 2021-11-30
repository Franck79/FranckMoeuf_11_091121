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
                    <Collapse title="Fiabilité" />
                    <Collapse title="Respect" />
                    <Collapse title="Service" />
                    <Collapse title="Responsabilité" />
                </section>
                <Footer />
            </>
        )
    }
}

export default About;
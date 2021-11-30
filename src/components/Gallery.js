import { Component } from "react";
import Card from './Card';

class Gallery extends Component {
    render() {
        return (
            <section className="gallery">
                <Card />
            </section>
        );
    }
}

export default Gallery;
import { Routes as RouteContainer, Route } from "react-router-dom";
import Home from './pages/Home'
import Property from './pages/Property'
import About from './pages/About'
import Error from './pages/Error'

const Routes = (
    <RouteContainer>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Property />} />
        <Route path="*" element={<Error />} />
    </RouteContainer>
)

export default Routes;
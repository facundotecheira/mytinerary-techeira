import { Link } from "react-router-dom"
const Footer = () => {

    return (
        <footer>
            
            <div className="navegation">
                <Link to="/">Home</Link>
                <Link to="/cities">Cities</Link>
                <a href="#a">Sign in</a>
                <a href="#a">Sign up</a>
            </div>
            
            <div className="copy">
                Copyright © Techeira Facundo
            </div>

        
            <div>
                <img className="redesIcon" src="/assets/instagram.png" alt="instagram"></img>
                <img className="redesIcon" src="/assets/wpp.png" alt="wpp"></img>
                <img className="twitter" src="/assets/twitter.png" alt="twitter"></img>
            </div>

        </footer>
    )
}

export default Footer
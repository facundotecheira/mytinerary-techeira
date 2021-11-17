const Footer = () => {

    return (
        <footer>
            
            <div className="navegation">
                <a href="#a">Home</a>
                <a href="#a">Cities</a>
                <a href="#a">Sign in</a>
                <a href="#a">Sign up</a>
            </div>
            
            <div className="copy">
                Copyright © Techeira Facundo
            </div>

        
            <div>
                <img className="redesIcon" src="./assets/instagram.png" alt="instagram"></img>
                <img className="redesIcon" src="./assets/wpp.png" alt="wpp"></img>
                <img className="twitter" src="./assets/twitter.png" alt="twitter"></img>
            </div>

        </footer>
    )
}

export default Footer
const Hero = () => {

    return (
        <div className="containerHero">
            <video className="video" src="./assets/Photographer.mp4" autoPlay loop muted></video>
            <h1>Mytinerary</h1>
            <div>
                <h3>Find your perfect trip,</h3>
                <h3>designed by insiders who know and love their cities!</h3>
            </div>
            <div>
            <a className = "buttonHero" href="#s">GET STARTED</a>
            </div>
        </div>
    )

}

export default Hero
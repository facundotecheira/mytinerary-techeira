const Hero = () => {

    return (
        <div class="containerHero">
            <video class="video" src="./assets/Photographer.mp4" autoPlay loop muted></video>
            <h1>Mytinerary</h1>
            <div>
                <h3>Find your perfect trip,</h3>
                <h3>designed by insiders who know and love their cities!</h3>
            </div>
            <div className= "buttonHero">
                <button class= "btn btn-outline-light " >GET STARTED</button>
            </div>
        </div>
    )

}

export default Hero
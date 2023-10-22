const Info = () => {
    return(
        <>
        <div className="Info-container">
            <div className="left">
                <h1>Im an <span className="Artist">Artist</span></h1>
                <p>I have a degree in Art History from Massachusettes College of Art amd Design and I am a trained Oil Painter.
                     Ive spent my whole life creating and feeding my creativity into everything I do.
                    Although my pursuit of art has been rewarding and immensly fulfilling, I knew I needed a change.
                </p>
            </div>
            <div className="right">
                <h1>Now im an aspiring <span className="Artist">Front End Developer</span></h1>
                <p>After a strong pivot in my career goals, ive found so much reward in coding. It has been such a meaningful transformation of my creative energy!
                    I finally feel a strong sense of contribution - a space where my creativity and artistic insight can be cultivated into meaningful problem solving.
                </p>
            </div>
            <div className="image1">
                <img  className="info-img" src="./purple.png"/>
            </div>
            <div className="image2">
                <img className="info-img" src="./clarins.png"/>
            </div>
        </div>
        </>
    )
}

export default Info
const Info = () => {
    return(
        <>
        <div className="Info-container">
            <div className="left">
                <h1>Im an <span className="Artist">Artist</span></h1>
                <p>I have a degree in Art History from MassArt and i am a trained Oil Painter. Ive spent my whole life creating and feeding my creativity into everything i do.</p>
            </div>
            <div className="right">
                <h1>Now im an aspiring Front End Developer</h1>
                <p>After a strong pivot in my interests, ive found so much reward in coding. It has been such a meaningful transformation of my creative energy!</p>
            </div>
            <div className="image1">
                <img  className="info-img" src="./purple.png"/>
            </div>
            <div className="image2">
                <img className="info-img" src="./purple.png"/>
            </div>
        </div>
        </>
    )
}

export default Info
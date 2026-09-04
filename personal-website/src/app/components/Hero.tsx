function Hero(): React.JSX.Element {
    return (
        <section id="hero">
            <div className="hero-text">
                <h1>Hello! My name is <span className="highlight-text">Tyler Hall</span></h1>
                <p>I am a junior web developer from Canada that specializes in full stack development</p>
                <p>I would love to get in touch and help bring your projects to life!</p>
            </div>
            <div className="hero-image">
                <img src="./images/headshot.jpeg" alt="Headshot Photo of Tyler" />
            </div>
        </section>
    )
};

export default Hero;
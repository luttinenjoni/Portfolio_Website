import "../styles/AboutMe.css";
import picture from "../assets/CV-kuva.jpg";

function AboutMe() {
  return (
        <>    
        <section id="aboutMe">
        <img src={picture} alt="Profile picture" />
        <div className="container about">
            <h2>About Me</h2>
            <p>Hello! My name is Joni Luttinen and I am a senior student at Oulu university Of Applied Sciences.</p>
            <p>I study information technology and my main focus is on web development but I am also interested in artificial intelligence and machine learning.</p>
        </div>
        </section>
        </>
    )
}

export default AboutMe
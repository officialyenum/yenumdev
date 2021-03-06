
import img from "../../assets/images/portrait2.png"
import '../../Styles/About.css'


const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={img} alt="" className="about__img" />
            <div className="about__data">
                <p className="about__description">
                    I try not to dwell on what i've already achieved, therefore i'm constantly learning something new in order to further develop in the chosen paths.
                    <span>
                        <br/>
                        <br/>
                    </span>
                    I also write about my journey on medium when i can, and i am a big fan of the Pirate Monkey D. Luffy from the One Piece Anime. 
                    <span>
                        <br/>
                        <br/>
                    </span>
                    Arsenal is the best footbal club in the world. 🔴 ⚪
                </p>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">03+</span>
                        <span className="about__info-name">Years<br/> experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">04+</span>
                        <span className="about__info-name">Completed <br/> project</span>
                    </div>
                    <div>
                        <span className="about__info-title">02+</span>
                        <span className="about__info-name">Companies <br/> Worked</span>
                    </div>
                </div>

                <div className="about__buttons">
                    <a href="https://games.yenum.dev" className="button button-flex">
                        Play My Games Here <i className="uil uil-game-structure button__icon"></i>
                    </a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
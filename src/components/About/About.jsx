
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
                    🎓 Currently, I'm advancing my skills in Unreal Engine, Blueprint, Gameplay & AI programming for Games, OpenGL, DirectX, and C++ through my ongoing MSc in Computer Games Programming at Teesside University.
                    <span>
                        <br/>
                    </span>
                    💻 Skill Set:
                    <span>
                        <br/>
                    </span>
                    - Game Programming: Excellence in Unreal Engine 5 using C++, and Unity using C#.
                    <span>
                        <br/>
                    </span>

                    - Web App Programming: Proficient in Laravel using PHP, and NestJS using TypeScript.
                   <span>
                        <br/>
                    </span>
                    - Graphics Programming: Strong foundation in OpenGL, DirectX11, and C++.
                    <span>
                        <br/>
                    </span>
                    - AI Programming: Extensive experience with OpenAI, Cohere, and AI21 Labs, utilizing Python, Typescript, or C++.
                    <span>
                        <br/>
                        <br/>
                    </span>
                    This diverse skill set uniquely positions me for projects that demand a seamless blend of web development, game programming, graphics programming, and AI integration. Let's connect and explore the possibilities of crafting cutting-edge solutions together! 🌐🚀
                </p>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">05+</span>
                        <span className="about__info-name">Years<br/> experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">10+</span>
                        <span className="about__info-name">Completed <br/> project</span>
                    </div>
                    <div>
                        <span className="about__info-title">04+</span>
                        <span className="about__info-name">Companies <br/> Worked</span>
                    </div>
                </div>

                <div className="about__buttons">
                    <a href="https://officialyenum.itch.io/liberation-code" className="button button-flex">
                        Play Liberation Code <i className="uil uil-game-structure button__icon"></i>
                    </a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About
import { Helmet } from "react-helmet";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Qualification from "../components/Qualification/Qualification";
import portrait from "../assets/images/prefil.png"

import '../Styles/Home.css';
import Footer from "../components/Footer/Footer";


const Home = () => {
  
  return (
    <>
      <Helmet>
        <title>Yenum.dev|Home Page</title>
        <meta property="og:title" content="Yenum's Portfolio Page" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C5603AQHng9Yw9HfvoA/profile-displayphoto-shrink_200_200/0/1636095704799?e=1642032000&v=beta&t=IHfrbn1CzVPqwAU14FIpuQUrJf1QSKtCGsT2Et4xhFo"
        />
        <meta property="og:description" content="Software Developer" />
        <meta
          name="description"
          content="Yenum.dev is a Software developer writer and a creative nomad"
        />
        <meta property="og:url" content="https://yenum.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="main">
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/yenum" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://www.github.com/officialyenum" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="https://officialyenum.medium.com/" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-medium-m"></i>
                        </a>
                        <a href="https://www.twitter.com/officialyenum" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                    <div className="home__img">
                      <svg className="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha">
                          <path d="M54,-27C67.5,-7.8,74.2,19.4,64,36.5C53.9,53.6,27,60.5,-0.7,60.9C-28.3,61.2,-56.7,55.2,-65.4,38.9C-74.1,22.7,-63.2,-3.8,-49,-23.3C-34.9,-42.8,-17.4,-55.4,1.4,-56.2C20.3,-57.1,40.5,-46.1,54,-27Z" transform="translate(100 100)" />
                        </mask> 
                        <g mask={"url(#mask0)"}>
                          <path d="M54,-27C67.5,-7.8,74.2,19.4,64,36.5C53.9,53.6,27,60.5,-0.7,60.9C-28.3,61.2,-56.7,55.2,-65.4,38.9C-74.1,22.7,-63.2,-3.8,-49,-23.3C-34.9,-42.8,-17.4,-55.4,1.4,-56.2C20.3,-57.1,40.5,-46.1,54,-27Z" transform="translate(100 100)" />
                          <image className="home__blob-img" x="12" y="8"  href={portrait}/>
                        </g>
                      </svg> 
                    </div>
                    <div className="home__data">
                      <h1 className="home__title">Hi, I am Yenum</h1>
                      <h1 className="home__subtitle">Game Programmer</h1>
                      <p className="home__description">
                      🎮 Leveling up in code and life | 🍜 Food enthusiast | 🙏 Catholic | 💬 Let's share laughs and geek out together
                      </p>
                      <a href="#portfolio" className="button button--flex">
                        Portfolio<i className="uil uil-message button_icon"></i>
                      </a>
                    </div>
                </div>
                <div className="home__scroll">
                  <a href="#about" className="home__scroll-button  button--flex">
                    <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span className="home__scroll-name">Scroll down</span>
                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
                  </a>
                </div>
            </div>
        </section>
        <Portfolio/>
        <About/>
        {/* <Skills/> */}
        <Qualification/>
        {/* <Services/> */}
        {/*<Project/> */}
        {/* <Contact/> */}
      </main>
      <Footer/>
    </>
  );
};

export default Home;

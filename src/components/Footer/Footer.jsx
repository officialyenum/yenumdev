// import {} from 'react'

import img from "../../assets/images/portrait2.png"
import '../../Styles/Footer.css'


const Footer = () => {
  return (
      <>
        <footer className='footer'>
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Yenum</h1>
                        <span className="footer__subtitle">Software Developer</span>
                    </div>
                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact Me</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href="https://www.facebook.com" className="footer__social">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/officialyenum" className="footer__social">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/officialyenum" className="footer__social">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&copy; Yenum. All right reserved.</p>
            </div>
        </footer>
        <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      </>
  )
}

export default Footer
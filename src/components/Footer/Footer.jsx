import '../../Styles/Footer.css'


const Footer = () => {
  return (
      <>
        <footer className='footer'>
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Yenum Opone</h1>
                        <span className="footer__subtitle">Game Programmer</span>
                    </div>
                    <ul className="footer__links">
                        <li>
                            <p className="footer__link">+447979834278</p>
                            {/* <a href="#services" className="footer__link">Services</a> */}
                        </li>
                        <li>
                            <p className="footer__link">oponechukwuyenum@gmail.com</p>
                            {/* <a href="#portfolio" className="footer__link">Portfolio</a> */}
                        </li>
                        <li>
                            <p className="footer__link">Middlesbrough, UK</p>
                            {/* <a href="#contact" className="footer__link">Contact</a> */}
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
                <p className="footer__copy">&copy; Yenum. All rights reserved.</p>
            </div>
        </footer>
        <a href="#home" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      </>
  )
}

export default Footer
import {useEffect, useState} from 'react'

import '../../Styles/TopBar.css'

const TopBar = () => {
  const [navMenu, setNavMenu] = useState(null);
  const [navToggle, setNavToggle] = useState(null);
  const [navClose, setNavClose] = useState(null);
  const [navLink, setNavLink] = useState(null);
  const [sections, setSections] = useState(null);
  const [themeButton, setThemeButton] = useState("")
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    setNavMenu(document.getElementById('nav-menu'))
    setNavToggle(document.getElementById('nav-toggle'))
    setNavClose(document.getElementById('nav-close'))
    setNavLink(document.querySelectorAll('.nav__link'))
    setSections(document.querySelectorAll('section[id'));
    setThemeButton(document.getElementById('theme-button'));
    setSelectedTheme(localStorage.getItem('selected-theme'));
    if (localStorage.getItem('selected-theme')) {
      setSelectedTheme(localStorage.getItem('selected-theme'));
    }
  }, [navMenu,navClose]);
  
  
  if (navToggle) {
    navToggle.addEventListener('click',()=> {
      navMenu.classList.add('show-menu');
    })
  }
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }
  const linkAction = () => {
    navMenu.classList.remove('show-menu');
  }
  
  if(navLink){
    navLink.forEach(n => n.addEventListener('click', linkAction))
  }
  
  const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const newDoc = document.querySelector('.nav__menu a[href*='+sectionId+']');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (newDoc) {
          newDoc.classList.add('active-link');
        }
      }else{
        if (newDoc) {
          newDoc.classList.remove('active-link');
        }
      }
    })
  }
  const scrollHeader = () => {
    const nav = document.getElementById('header');
    const scrollY = window.pageYOffset
    if(scrollY >= 80){
      if(nav) nav.classList.add('scroll-header');
    }else{
      if(nav) nav.classList.remove('scroll-header');
    }
  }
  const scrollUp = () => {
    const scrollTop = document.getElementById('scroll-up');
    const scrollY = window.pageYOffset
    if(scrollY >= 560){
      if(scrollTop) scrollTop.classList.add('show-scroll');
    }else{
      if(scrollTop) scrollTop.classList.remove('show-scroll');
    }
  }
  if (sections) {
    window.addEventListener('scroll',scrollActive);
    window.addEventListener('scroll',scrollHeader);
    window.addEventListener('scroll',scrollUp);
  }

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      updateTheme(themeButton);
    })
  }

  const updateTheme = (themeButton) => {
    console.log(selectedTheme);
    if (selectedTheme === 'dark-theme') {
        document.body.classList.add('light');
        document.body.classList.remove('dark-theme');
        localStorage.setItem('selected-theme','light');
        setSelectedTheme(localStorage.getItem('selected-theme'));

        //change Icon
        themeButton.classList.add('uil-moon');
        themeButton.classList.remove('uil-sun');
    }else{
        document.body.classList.remove('light');
        document.body.classList.add('dark-theme');
        localStorage.setItem('selected-theme','dark-theme');
        setSelectedTheme(localStorage.getItem('selected-theme'));

        //Change Icon
        themeButton.classList.add('uil-sun');
        themeButton.classList.remove('uil-moon');
    }
  }

  
  return (
    <header className='header' id='header'>
      <nav className="nav container">
        <a href="/" className="nav__logo"> Yenum </a>
        <div className="nav__menu" id='nav-menu'>
          <ul className="nav__list grid">
          <li className="nav__item">
              <a href="/#home" className='nav__link active-link'>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/#about" className='nav__link'>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="/#skills" className='nav__link'>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="/#services" className='nav__link'>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="/#portfolio" className='nav__link'>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="/#contact" className='nav__link'>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close nav__icon" id='nav-close'></i>
        </div>

        <div className="nav__btns">
          {/* ========Theme change button======== */}
          <div className="uil uil-moon change-theme" id='theme-button'></div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps nav__icon"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default TopBar
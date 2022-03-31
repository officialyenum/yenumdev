import {useState, useEffect} from 'react';

import '../../Styles/Services.css';


const Services = () => {
    const [modalViews, setModalViews] = useState(null);
    const [modalBtns, setModalBtns] = useState(null);
    const [modalCloses, setModalCloses] = useState(null);
    
    useEffect(() => {
      const setData = () => {
        setModalViews(document.querySelectorAll('.services__modal'));
        setModalBtns(document.querySelectorAll('.services__button'));
        setModalCloses(document.querySelectorAll('.services__modal-close'));
      }
      setData();
      
    }, []);
    if(modalBtns){
        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener('click', () => {
                modalViews[i].classList.add('active-modal');
            })
        });
    }
    if(modalCloses){
        modalCloses.forEach((modalClose) => {
            modalClose.addEventListener('click', () => {
                let view = modalClose.parentNode.parentNode;
                view.classList.remove('active-modal');  
            });
        });
    }
    return (
        <section className='services section' id='services'>
            {/* ======== Services ========*/}
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <div className="services__container container grid">
                {/* ======== Services 1 ========*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-mobile-android services__icon"></i>
                        <h3 className="services__title">Mobile Application <br/> Development</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button">
                        View more
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Mobile Application <br/> Development</h4>
                            <i className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>In-depth knowledge of Flutter(dart) Framework</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Proficient with Swift(Xcode) and Kotlin(Android Studio) setup </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Support the entire application lifecycle (concept, design, test, release and support)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Design interfaces to improve user experience</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Produce fully functional mobile applications writing clean code</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Troubleshoot and debug to optimize performance</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ======== Services 2 ========*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-desktop services__icon"></i>
                        <h3 className="services__title">Web Application <br/> Development</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button">
                        View more
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Web Application <br/> Development</h4>
                            <i className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Writing well designed, testable, efficient code by using best software development practices</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Familiarity with the following programming languages: PHP(Laravel), Javascript(React, NodeJs)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Creating website layout/user interfaces by using standard HTML/CSS practices</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Integrating data from various back-end services and databases(NoSQL,MySQL and postgreSQL)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Adequate knowledge of relational database systems, Object Oriented Programming and web application development</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ======== Services 3 ========*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-dice-six services__icon"></i>
                        <h3 className="services__title">Game <br/> Development</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button">
                        View more
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Game <br/> Development</h4>
                            <i className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Translating requirements into complicated but clean and efficient code</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Familiarity with the following programming languages: C#(Unity), Lua(Love2d), Javascript(React, NodeJs, createJS)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Producing prototypes of gameplay ideas and features</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Generate game scripts and storyboards</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Contribute to the design and audio features of the game</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>“Polish” the game, maintain code, fix bugs and iron out occurring problems</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
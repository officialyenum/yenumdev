import {useState, useEffect} from 'react';
import image from "../../assets/images/portfolio.jpg";
import salonimage from "../../assets/images/app_360.png";
import awcimage from "../../assets/images/app_awc.png";
import diceimage from "../../assets/images/app_dice.png";
import epimage from "../../assets/images/app_enterprise.png";
import mlimage from "../../assets/images/app_moneyline.png";
// Styles must use direct files imports
// Core modules imports are same as usual
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


// Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import '../../Styles/Portfolio.css';


const Portfolio = () => {
    
    return (
        <section className='portfolio section' id='portfolio'>
            {/* ======== Portfolio ========*/}
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most Recent Work</span>
            <Swiper
                cssMode={true}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
                className="portfolio__container container swiper-container"
            >
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        <img src={diceimage} alt="" className='portfolio__img' />

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Dice.Ng</h3>
                            <p className="portfolio__description">Virtual Web Gaming Platform.</p>
                            <a href="https://dice.ng" className="button button--flex button--small portfolio__button">
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        <img src={salonimage} alt="" className='portfolio__img' />

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">360 Le Salon</h3>
                            <p className="portfolio__description">Business, Payment & Staff Management System.</p>
                            <a href="https://360lesalon.com" className="button button--flex button--small portfolio__button">
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        <img src={mlimage} alt="" className='portfolio__img' />

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Money Line</h3>
                            <p className="portfolio__description">Loan Management System. (Ongoing)</p>
                            <a href="https://moneyline.ng" className="button button--flex button--small portfolio__button">
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        
                        <img src={awcimage} alt="" className='portfolio__img' />

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">After work chills</h3>
                            <p className="portfolio__description">Social Community Platform. (Ongoing)</p>
                            <a href="#" className="button button--flex button--small portfolio__button">
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        
                        <img src={epimage} alt="" className='portfolio__img' />

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">The Enterprise</h3>
                            <p className="portfolio__description">Hotel and Shortlet Investment and Management.</p>
                            <a href="#" className="button button--flex button--small portfolio__button">
                                Demo
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-pagination">
                </div>
            </Swiper>
        </section>
    )
}

export default Portfolio
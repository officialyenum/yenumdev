import React from 'react';
import projectsList from "../../data/projects.json";
// Styles must use direct files imports
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';

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
                {projectsList && projectsList.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="portfolio__content grid">
                            <img src={project.src} alt="" className='portfolio__img' />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">{project.title}</h3>
                                <p className="portfolio__description">{project.description}</p>
                                <a href={project.url} className="button button--flex button--small portfolio__button">
                                    Demo
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                )}

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
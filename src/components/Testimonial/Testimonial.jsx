import image from "../../assets/images/portfolio.jpg";


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import '../../Styles/Testimonial.css';


const Testimonial = () => {
    
    return (
        <section className='testimonial section' id='testimonial'>
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My Client Saying</span>
            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={48}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets:true
                }}
                breakpoints={{
                    568:{
                        slidesPerView:2
                    }
                }}
                modules={[Pagination]}
                className="testimonial__container container grid swiper-container"
            >
                <SwiperSlide>
                    {/* ======= Testimonial  1 =======*/}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={image} alt='' className="testimonial__img"></img>
                                <div>
                                    <h3 className="testimonial__name">Sarah Smith</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>
                        </div>
                        <p className="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24hours a day</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* ======= Testimonial  2 =======*/}
                    <div className="testimonial__content grid">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={image} alt='' className="testimonial__img"></img>
                                <div>
                                    <h3 className="testimonial__name">John Doe</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>
                        </div>
                        <p className="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24hours a day</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={image} alt='' className="testimonial__img"></img>
                                <div>
                                    <h3 className="testimonial__name">Mikky Cody</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>
                        </div>
                        <p className="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24hours a day</p>

                    </div>
                </SwiperSlide>
                <div className="swiper-pagination swiper-pagination-testimonial">

                </div>
            </Swiper>
        </section>
    )
}

export default Testimonial
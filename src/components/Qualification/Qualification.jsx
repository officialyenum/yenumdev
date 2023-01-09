import {useState, useEffect} from 'react';

import '../../Styles/Qualification.css';


const Qualification = () => {
    const [tabs, setTabs] = useState(null);
    const [tabContents, setTabContents] = useState(null);

    useEffect(() => {
        const setData = () => {
            setTabs(document.querySelectorAll('[data-target]'));
            setTabContents(document.querySelectorAll('[data-content]'));
        }
        setData();
    }, []);

    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target);
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('qualification__active');
                });
                target.classList.add('qualification__active');
                tabs.forEach(tab => {
                    tab.classList.remove('qualification__active');
                });
                tab.classList.add('qualification__active');
            })
        });
    }
    return (
        <section className='qualification section' id='qualification'>
            {/* ======== Qualification ========*/}
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container grid">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active" data-target="#education">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex"  data-target="#work">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/*======== Qualification Content 1 ========*/}
                    <div className="qualification__content qualification__active" data-content id="education">
                        {/*======== Qualification 1 ========*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science</h3>
                                <span className="qualification__subtitle">Madonna University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Jan 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                        {/*======== Qualification 2 ========*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Data Structures and Algorithms</h3>
                                <span className="qualification__subtitle">Udacity</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2022
                                </div>
                            </div>
                        </div>
                        {/*======== Qualification 3 ========*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science For Game Development</h3>
                                <span className="qualification__subtitle">Harvard University (CS50)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div></div>
                        </div>
                    </div>
                    {/*======== Qualification Content 2 ========*/}
                    <div className="qualification__content" data-content id="work">
                        {/*======== Qualification 1 ========*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>

                            <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Lordwin Group - Nigeria (Full Time | Hybrid)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2019 - Mar 2021
                                </div>
                            </div>
                        </div>
                        {/*======== Qualification 2 ========*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Game Programmer</h3>
                                <span className="qualification__subtitle">Smat Virtual - Nigeria (Part Time | Remote)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Nov 2020 - till date
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>

                        {/*======== Qualification 3 ========*/}

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div>

                            <h3 className="qualification__title">Lead Software Engineer</h3>
                                <span className="qualification__subtitle">Lordwin Group - Nigeria(Full Time | Hybrid)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    Mar 2021 - till date
                                </div>
                            </div>
                        </div>
                        {/*======== Qualification 4 ========*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Lead Backend Engineer</h3>
                                <span className="qualification__subtitle">Ashiri - Nigeria (Part Time | Remote)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>
                                    May 2022 - till date
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
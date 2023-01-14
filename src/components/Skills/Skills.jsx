import {useState, useEffect} from 'react';

import '../../Styles/Skills.css';


const Skills = () => {
    const [skillsContent, setSkillsContent] = useState(null);
    const [skillsHeader, setSkillsHeader] = useState(null);

    useEffect(() => {
        const setData = () => {
            setSkillsContent(document.getElementsByClassName('skills__content'));
            setSkillsHeader(document.querySelectorAll('.skills__header'));
        }
        setData();
    }, [])
    const toggleSkills = (e)=>{
        console.log(e.target.parentNode.parentNode);
        let itemClass = e.target.parentNode.parentNode;
        for(let i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close';
        }
        if(itemClass.className === 'skills__content skills__close'){
            e.target.parentNode.parentNode.className = 'skills__content skills__open'
        }
    }
    if (skillsHeader) {
        skillsHeader.forEach((el) => {
            el.addEventListener('click',toggleSkills);
        });
    }
    return (
        <section className='skills section' id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {/* ======= Skills 1 =======*/}
                <div className="skills__content skills__open">
                    <div className="skills__header">
                        <i className="uil uil-brackets-curly skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Frontend Developer</h1>
                            <div className="skill__subtitle">More than 4 years</div>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div className="skills__list grid">
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML</h3>
                                <div className="skills__number">90%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">SASS | CSS</h3>
                                <div className="skills__number">65%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__css"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                <div className="skills__number">85%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__javascript"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                                <div className="skills__number">85%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__react"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======= Skills 2 =======*/}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-server-network skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Backend | DevOps Developer</h1>
                            <div className="skill__subtitle">More than 5 years</div>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div className="skills__list grid">
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Laravel PHP</h3>
                                <div className="skills__number">90%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__php"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Node JS</h3>
                                <div className="skills__number">85%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__node"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <div className="skills__number">75%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__python"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Postman</h3>
                                <div className="skills__number">85%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__postman"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Git</h3>
                                <div className="skills__number">85%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__git"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Docker</h3>
                                <div className="skills__number">75%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__docker"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Cloud : AWS | Digital Ocean | Vercel</h3>
                                <div className="skills__number">65%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__cloud"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======= Skills 3 =======*/}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-mobile-android-alt skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Mobile Developer</h1>
                            <div className="skill__subtitle">More than 4 years</div>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div className="skills__list grid">
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Flutter Dart</h3>
                                <div className="skills__number">90%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__flutter"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Xcode Swift</h3>
                                <div className="skills__number">70%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__swift"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Android Kotlin</h3>
                                <div className="skills__number">55%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__kotlin"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======= Skills 4 =======*/}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-swatchbook skills__icon"></i>
                        <div>
                            <h1 className="skills__title">UI/UX Designer</h1>
                            <div className="skill__subtitle">More than 3 years</div>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div className="skills__list grid">
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Figma</h3>
                                <div className="skills__number">65%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__figma"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photoshop</h3>
                                <div className="skills__number">75%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__photoshop"></span>
                            </div>
                        </div>

                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Illustrator</h3>
                                <div className="skills__number">45%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__illustrator"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======= Skills 5 =======*/}
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-dice-six skills__icon"></i>
                        <div>
                            <h1 className="skills__title">Game Programmer</h1>
                            <div className="skill__subtitle">More than 4 years</div>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div className="skills__list grid">
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Unity</h3>
                                <div className="skills__number">75%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__unity"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">C#</h3>
                                <div className="skills__number">75%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__csharp"></span>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skills__titles">
                                <h3 className="skills__name">Create JS</h3>
                                <div className="skills__number">55%</div>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__createjs"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
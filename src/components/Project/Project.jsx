import image from "../../assets/images/prefil.png";


const Project = () => {

    return (
        <section className='project section'>
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new Project</h2>
                        <p className="project__subtitle">Contact me now let's create</p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact Me
                            <i className="uil uil-message project__icon button_icon"></i>
                        </a>
                    </div>
                    <img src={image} alt="My Portrait" className="project__img"></img>
                </div>
            </div>
        </section>
    )
}
export default Project
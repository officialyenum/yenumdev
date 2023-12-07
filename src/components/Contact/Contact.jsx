// import axios from "axios";
import React, { useState } from "react";
import '../../Styles/Contact.css'
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [project, setProject] = useState("");
    const [message, setMessage] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            Toast.fire({
              icon: "error",
              title: "No name to Submit",
            });
            return;
        }
        if (email.trim().length === 0) {
            Toast.fire({
              icon: "error",
              title: "No email to Submit",
            });
            return;
        }
        if (project.trim().length === 0) {
            Toast.fire({
              icon: "error",
              title: "No Project title to Submit",
            });
            return;
        }
        if (message.trim().length === 0) {
            Toast.fire({
              icon: "error",
              title: "No Message to Submit",
            });
            return;
        }
        const data = {
            name:name,
            email:email,
            project:project,
            message:message,
        }
        const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        Toast.fire({
            icon: "info",
            title: "Your message is being sent please wait a moment...."
        });
        fetch(`https://dashboard.yenum.dev/api/contact`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
                console.log(data.status);
                console.log(data.data);
                setName("");
                setEmail("");
                setProject("")
                setMessage("");
                Toast.fire({
                    icon: "success",
                    title: "Your request was sent to yenum successfully....",
                    timer: 3000,
                    timerProgressBar: true,
                });
            })
            .catch((err) => {
                Toast.fire({
                    icon: "error",
                    title: err,
                    timer: 3000,
                    timerProgressBar: true,
                });
                console.log(err);
                return;
            });
    }
    return (
        <section className='contact section' id='contact'>
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get In Touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+2347064482201,</span>
                            <br/>
                            <span className="contact__subtitle">+447979834278</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">oponechukwuyenum@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Lagos, Nigeria</span>
                        </div>
                    </div>
                </div>
                <form action="" className="contact__form grid" onSubmit={formSubmitHandler}>

                    <span style={{color: "red", fontSize: "12px" }}>Contact Form temporarily Unavailable, Please Send an Email Instead</span>
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input 
                            type="text"
                            className="contact__input"
                            onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" className="contact__input" onChange={e=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="project" className="contact__label">Project</label>
                        <input type="text" className="contact__input" onChange={e=>setProject(e.target.value)} />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea name="message" id="message" cols="0" rows="7" className="contact__input" 
                            onChange={e=>setMessage(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button type="submit" className="button button--flex button--small-success" disabled>
                            Send Message
                            <i className="uil uil-message contact__icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
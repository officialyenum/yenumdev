import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});


const AnonymousYellow = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(
    "Fill Form To Send Your Messages Anonymously to the AWC Telegram group"
  );
  const [titleMessage, setTitleMessage] = useState("Anonymous Yellow");
  const [isError, setIsError] = useState(false);

  const messageChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsError(false);
    }
    setMessage(event.target.value);
  };

  useEffect(() => {
    MySwal.fire({
      title: titleMessage,
      text: errorMessage,
      icon: isError ? "error" : "success",
      confirmButtonText: "OK",
      footer: "Copyright Yenum 2021",
    });
    return () => {};
  }, [isError, titleMessage, errorMessage]);

  // const notify = () => {
  //   setIsError(false);
  //   setTitleMessage("TITLE");
  //   setErrorMessage("a message");
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (message.trim().length === 0) {
      Toast.fire({
        icon: "error",
        title: "No Message to Submit",
      });
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message,
      }),
    };

    setErrorMessage("Your request is being processed please wait a moment....");
    setTitleMessage("Anonymous Yellow");
    setIsError(false);
    fetch(`https://dashboard.yenum.dev/api/anonymous-yellow`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setMessage("");
        setErrorMessage("Submitted Successfully");
        setTitleMessage("Anonymous Yellow");
        setIsError(false);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err,
        });
        console.log(err);
        return;
      });
  };

  return (
    <>
      <Helmet>
        <title>Yenum.dev | Anonymous Yellow</title>
        <meta property="og:title" content="Anonymous Yellow" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C5603AQHng9Yw9HfvoA/profile-displayphoto-shrink_200_200/0/1636095704799?e=1642032000&v=beta&t=IHfrbn1CzVPqwAU14FIpuQUrJf1QSKtCGsT2Et4xhFo"
        />
        <meta
          property="og:description"
          content="Anonymous Yellow is a game created to send anonymous messages to a telegram group via the anonymous yellow telegram bot"
        />
        <meta
          name="description"
          content="Anonymous Yellow is a game created to send anonymous messages to a telegram group via the anonymous yellow telegram bot"
        />
        <meta property="og:url" content="https://yenum.dev/anonymous-yellow" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="main">
        <section className='anonymous section' id='anonymous'>
            <h2 className="section__title">Anonymous Yellow</h2>
            <span className="section__subtitle">Drop your message in the box below and send</span>
            
            <form className="anonymous__form container grid" onSubmit={formSubmitHandler}>
              
              <div className="anonymous__content">
                <label htmlFor="message" className="anonymous__label">Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    cols="0" 
                    rows="7" 
                    className="anonymous__input"
                    placeholder="Enter Your Anonymous message here."
                    onChange={messageChangeHandler}
                    value={message}
                ></textarea>
              </div>
              <div className="anonymous__buttons">
                  <button type="submit" className="button button--flex">
                    Send to AWC
                      <i className="uil uil-message anonymous__icon"></i>
                  </button>
              </div>
            </form>
          </section>
      </main>
    </>
  );
};

export default AnonymousYellow;

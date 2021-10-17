// import axios from "axios";
import React, { useState, useEffect } from "react";

// const TOKEN = "bot2081684117:AAEL-Fx3N7e_FZlQZ67KUQSKXA-cEJhaYaw";
// const AWC_GROUP = -1001152538944;
// const TEST_GROUP = -742245862;

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
    <div className="hero-full-container background-image-container white-text-container showBGImage">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex text-gray-200 justify-center cursive mt-2">
            Anonymous Yellow
          </h1>
          <h2 className="text-lg text-gray-400 flex justify-center text-center mb-12">
            Drop your message in the box below and send
          </h2>
          <form onSubmit={formSubmitHandler}>
            <label
              className="text-lg text-gray-400 flex justify-center mb-12"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea mt-1 text-lg text-gray-400 flex justify-center rounded p-4 mb-12 block w-full"
              rows="5"
              cols="5"
              placeholder="Enter Your Anonymous message here."
              onChange={messageChangeHandler}
              value={message}
            ></textarea>
            {/* <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"> */}
            <div className=" flex justify-center">
              <button
                className="flex shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send to AWC
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AnonymousYellow;

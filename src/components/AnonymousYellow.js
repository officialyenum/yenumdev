// import axios from "axios";
import React, { useState } from "react";

const TOKEN = "bot2081684117:AAEL-Fx3N7e_FZlQZ67KUQSKXA-cEJhaYaw";
const AnonymousYellow = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const messageChangeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsValid(false);
    }
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    var d = new Date();
    var tuesday = d.getDay();
    var hour = d.getHours();
    if (message.trim().length === 0) {
      setIsValid(false);
      setErrorMessage("No Message to Submit");
      setShowModal(true);
      console.log(errorMessage);
      return;
    }
    if (tuesday !== 2 && (hour <= 17 || hour >= 20)) {
      setIsValid(false);
      setErrorMessage(
        "You can only submit messages on Tuesdays from 05:00pm WAT TO 08:00PM WAT"
      );
      setShowModal(true);
      console.log(errorMessage);
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: -1001152538944,
        text: message,
      }),
    };
    fetch(`https://api.telegram.org/${TOKEN}/sendMessage`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsValid(true);
        setErrorMessage("Your Message was successfully sent!");
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    // const article = {
    //   recipient_type: "individual",
    //   to: "2347064482201",
    //   type: "text",
    //   text: {
    //     body: message,
    //   },
    // };
    // const headers = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "D360-API-KEY": "HrJtZy_sandbox",
    //   "Access-Control-Allow-Origin": "http://localhost:3000",
    //   "Access-Control-Allow-Credentials": true,
    // };
    // axios
    //   .post("https://waba-sandbox.360dialog.io/v1/messages", article, {
    //     headers,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setIsValid(true);
    //     setErrorMessage("Your Message was successfully sent!");
    //     setShowModal(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsValid(false);
    //     setErrorMessage(error);
    //     setShowModal(true);
    //   });
    //   gBGHI0cGRIIgHwIJ13_TUSW2r7r2;
    //   gBGHI0cGRIIgHwIJ3mVj9bydI89a;
    console.log(tuesday, hour);
    console.log(isValid);
    console.log(message);
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
              className="form-textarea mt-1 text-lg text-gray-400 flex justify-center rounded p-4 mb-12 block w-full"
              rows="5"
              cols="5"
              placeholder="Enter Your Anonymous message here."
              onChange={messageChangeHandler}
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {isValid ? "Success" : "An Error Occured"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-red opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-center my-4 text-blueGray-500 text-lg leading-relaxed">
                    {errorMessage}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-00 bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default AnonymousYellow;

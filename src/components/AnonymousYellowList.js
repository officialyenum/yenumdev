// import axios from "axios";
import React, { useState, useEffect } from "react";
import AnonymousYellowItem from "./AnonymousYellowItem";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const TOKEN = "bot2081684117:AAEL-Fx3N7e_FZlQZ67KUQSKXA-cEJhaYaw";
const TEST_GROUP = -742245862;
// const AWC_GROUP = -1001152538944;

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

const AnonymousYellowList = () => {
  const [messages, setMessages] = useState(null);
  const [errorMessage, setErrorMessage] = useState(
    "Welcome To Anonymous Yellow Messages Dashboard"
  );
  const [type, setType] = useState(0);
  const [titleMessage, setTitleMessage] = useState("Anonymous Yellow");
  const [isError, setIsError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [published, setPublished] = useState(0);
  const [unPublished, setUnPublished] = useState(0);

  useEffect(() => {
    fetch(`https://dashboard.yenum.dev/api/anonymous-yellow/${type}/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setPublished(data.published);
        setUnPublished(data.unpublished);
        setMessages(data.data);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err,
        });
        console.log(err);
        return;
      });
    return () => {};
  }, [type, refreshKey]);

  useEffect(() => {
    MySwal.fire({
      title: titleMessage,
      text: errorMessage,
      icon: isError ? "error" : "success",
      confirmButtonText: "OK",
      footer: "Copyright Yenum 2021",
    });
    return () => {};
  }, [clicked, isError, titleMessage, errorMessage]);

  const publishToTelegram = (props) => {
    publishMessage(props);
    // console.log(props);
    // var d = new Date();
    // var tuesday = d.getDay();
    // var hour = d.getHours();
    // console.log("HOUR", hour);
    // if (tuesday !== 2) {
    //   Toast.fire({
    //     icon: "error",
    //     title:
    //       "You can only submit messages on Tuesdays from 05:00pm WAT TO 08:00PM WAT",
    //   });
    // } else {
    //   if (hour <= 17 && hour >= 20) {
    //     Toast.fire({
    //       icon: "error",
    //       title:
    //         "You can only submit messages on Tuesdays from 05:00pm WAT TO 08:00PM WAT",
    //     });
    //   } else {
    //     publishMessage(props);
    //   }
    // }
  };

  const deleteMessage = (props) => {
    const requestOptions = {
      method: "POST",
    };
    console.log(props.id);
    fetch(
      `https://dashboard.yenum.dev/api/anonymous-yellow/${props.id}/delete`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        Toast.fire({
          icon: "success",
          title: "Message Has been Deleted",
        });
        setRefreshKey((oldKey) => oldKey + 1);
        return data.data;
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "An Error Occured trying to delete message",
        });
        console.log(err);
        return err;
      });
  };

  const showItemModal = (message) => {
    setIsError(false);
    setTitleMessage("Anonymous Yellow");
    setErrorMessage(message);
    setClicked((oldKey) => oldKey + 1);
    // toast(message, toastOptions);
  };

  const updateUnpublished = () => {
    setType(0);
  };
  const updatePublished = () => {
    setType(1);
  };
  const updateTotal = () => {
    setType(2);
  };
  const updateMessage = (props) => {
    const requestOptions = {
      method: "POST",
    };
    console.log(props.id);
    fetch(
      `https://dashboard.yenum.dev/api/anonymous-yellow/${props.id}/publish`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        Toast.fire({
          icon: "success",
          title: "Message Has been marked as published",
        });
        setRefreshKey((oldKey) => oldKey + 1);
        return data.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const publishMessage = (props) => {
    const newMESSAGE = `<u><b>POST ${props.id}</b></u> \n\n ${props.content}`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TEST_GROUP,
        text: newMESSAGE,
        parse_mode: "HTML",
      }),
    };
    fetch(`https://api.telegram.org/${TOKEN}/sendMessage`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Toast.fire({
          icon: "success",
          title: "Message was successfully published to telegram!",
        });
        updateMessage(props);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  return (
    <div className="hero-full-container background-image-container white-text-container showBGImage">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex text-gray-200 justify-center cursive mt-2">
            Dashboard
          </h1>
          <h2 className="text-lg text-gray-400 flex justify-center text-center mb-12">
            Message List
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <button onClick={updatePublished}>
                <div className="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-green-100 rounded-md">
                  <div className="text-1xl font-semibold">
                    <div className="text-gray-900">Published Messages.</div>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-2">
                    <div className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-green-500">
                      {published}
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button onClick={updateUnpublished}>
                <div className="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-red-100 rounded-md">
                  <div className="text-1xl font-semibold">
                    <div className="text-gray-900">Unpublished Messages.</div>
                  </div>

                  <div className="mt-3 md:mt-0 md:ml-2">
                    <div className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-red-500">
                      {unPublished}
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button onClick={updateTotal}>
                <div className="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-blue-100 rounded-md">
                  <div className="text-1xl font-semibold">
                    <div className="text-gray-900">All Messages.</div>
                  </div>

                  <div className="mt-3 md:mt-0 md:ml-2">
                    <div className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-blue-500">
                      {published + unPublished}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {messages === null ? (
            <div className="text-gray-100 text-center">
              Loading... Please Wait...
            </div>
          ) : (
            <div className="card-body">
              <table id="table" className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      S/N
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Messages
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages &&
                    messages.map((message, index) => (
                      <AnonymousYellowItem
                        key={index}
                        id={index}
                        message={message}
                        onPublish={publishToTelegram}
                        onDelete={deleteMessage}
                        showInModal={showItemModal}
                      ></AnonymousYellowItem>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
      {/* {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{titleMessage}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-red opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <p className="text-center my-4 text-blueGray-500 text-lg leading-relaxed">
                    {errorMessage}
                  </p>
                </div>

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
      ) : null} */}
    </div>
  );
};

export default AnonymousYellowList;

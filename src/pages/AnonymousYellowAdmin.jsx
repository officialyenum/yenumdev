// import axios from "axios";
import React, { useState, useEffect } from "react";
import AnonymousYellowItem from "../components/AnonymousYellow/Item";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Helmet } from "react-helmet";
import Table from 'react-bootstrap/Table'

const TOKEN = "bot2081684117:AAEL-Fx3N7e_FZlQZ67KUQSKXA-cEJhaYaw";
// const TEST_GROUP = -742245862;
const AWC_GROUP = -1001152538944;

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

const AnonymousYellowAdmin = () => {
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
        chat_id: AWC_GROUP,
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
    <>
        <Helmet>
            <title>Yenum.dev | Anonymous Yellow Dashboard</title>
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
            <meta
            property="og:url"
            content="https://yenum.dev/anonymous/dashboard/publish/oreofe"
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <main className="main">
            <section className='anonymous section' id='anonymous'>
                <h2 className="section__title">Anonymous Yellow Dashboard</h2>
                <span className="section__subtitle">Message List</span>
            
                <div className="anonymousadmin__container container grid">
                    {/* ======== Published ========*/}
                    <div className="anonymousadmin__content">
                        <div>
                            <i className="uil uil-check-circle anonymousadmin__icon">{published}</i>
                            <h3 className="anonymousadmin__title">Published <br/>  Messages.</h3>
                        </div>
                        <span className="button button--flex button--small button--link services__button" onClick={updatePublished}>
                            View published
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                    </div>
                    {/* ======== Unpublished  ========*/}
                    <div className="anonymousadmin__content">
                        <div>
                            <i className="uil uil-process anonymousadmin__icon">{unPublished}</i>
                            <h3 className="anonymousadmin__title">Unpublished <br/> Messages.</h3>
                        </div>
                        <span className="button button--flex button--small button--link services__button" onClick={updateUnpublished}>
                            View Unpublished
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                    </div>
                    {/* ======== All ========*/}
                    <div className="anonymousadmin__content">
                        <div>
                            <i className="uil uil-file-info-alt anonymousadmin__icon">{published + unPublished}</i>
                            <h3 className="anonymousadmin__title">All <br/> Messages. </h3>
                        </div>
                        <span className="button button--flex button--small button--link services__button" onClick={updateTotal}>
                            View All Messages
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                    </div>
                </div>
                {messages === null ? (
                <div className="anonymous container grid">
                    Loading... Please Wait...
                </div>
                ) : (
                <div className="anonymousadmin__container container">
                    <Table striped bordered hover variant="dark"
                    responsive="md">
                    <thead>
                        <tr>
                        <th
                            scope="col"
                        >
                            S/N
                        </th>
                        <th
                            scope="col"
                        >
                            Messages
                        </th>
                        <th
                            scope="col"
                        >
                            Date
                        </th>
                        <th
                            scope="col"
                        >
                            Status
                        </th>
                        <th scope="col">
                            <span>Action</span>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </Table>
                </div>
                )}
            </section>
        </main>
    </>
  );
};

export default AnonymousYellowAdmin;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import '../Styles/Rosary.css';
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


const Rosary = () => {
    const [showRosary, setShowRosary] = useState(true);
    const [showPrayer, setShowPrayer] = useState(false);
    const [showMystery, setShowMystery] = useState(false);
    const [tabs, setTabs] = useState(null);
    const [tabContents, setTabContents] = useState(null);

    useEffect(() => {
        const setData = () => {
            setTabs(document.querySelectorAll('[data-target]'));
            setTabContents(document.querySelectorAll('[data-content]'));
        }
        setData();
    }, []);

    const handleShowRosary = () => {
      setShowMystery(false);
      setShowPrayer(false);
      setShowRosary(true);
    }
    const handleShowPrayer = () => {
      setShowMystery(false);
      setShowPrayer(true);
      setShowRosary(false);
      
    }
    const handleShowMystery = () => {
      setShowMystery(true);
      setShowPrayer(false);
      setShowRosary(false);
    }

    if (tabs) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target);
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('rosary__active');
                });
                tabs.forEach(tab => {
                    tab.classList.remove('rosary__active');
                });
                target.classList.add('rosary__active');
                // tab.classList.add('rosary__active');
            })
        });
    }




  return (
    <>
      <Helmet>
        <title>Yenum.dev | Rosary</title>
        <meta property="og:title" content="Rosary" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C5603AQHng9Yw9HfvoA/profile-displayphoto-shrink_200_200/0/1636095704799?e=1642032000&v=beta&t=IHfrbn1CzVPqwAU14FIpuQUrJf1QSKtCGsT2Et4xhFo"
        />
        <meta
          property="og:description"
          content="Rosary"
        />
        <meta
          name="description"
          content="Rosary"
        />
        <meta property="og:url" content="https://yenum.dev/rosary" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="main">
        <section className='rosary section' id='rosary'>
            <h2 className="section__title">The Holy Rosary</h2>
            <span className="section__subtitle">Get Familiar with the rosary</span>
            <div className="rosary__container container grid">
                <div className="rosary__tabs">
                    <div className={`rosary__button button--flex ${showRosary && "rosary__active"}`} onClick={handleShowRosary}>
                        <i className="uil uil-graduation-cap rosary__icon"></i>
                        Rosary
                    </div>

                    <div className={`rosary__button button--flex ${showPrayer && "rosary__active"}`}  onClick={handleShowPrayer}>
                        <i className="uil uil-briefcase-alt rosary__icon"></i>
                        Prayers
                    </div>

                    <div className={`rosary__button button--flex ${showMystery && "rosary__active"}`} onClick={handleShowMystery}>
                        <i className="uil uil-briefcase-alt rosary__icon"></i>
                        Mysteries
                    </div>
                </div>

                <div className="rosary__sections">
                    {showRosary && <p>Rosary Component</p>}
                    {showPrayer && <p>Prayers Component</p>}
                    {showMystery && <p>Mysteries Component </p>}
                </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default Rosary;

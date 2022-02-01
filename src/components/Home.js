import React from "react";
import IconBtn from "./UI/IconBtn";
import image from "../assets/images/portfolio.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yenum.dev|Home Page</title>
        <meta property="og:title" content="Yenum's Portfolio Page" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C5603AQHng9Yw9HfvoA/profile-displayphoto-shrink_200_200/0/1636095704799?e=1642032000&v=beta&t=IHfrbn1CzVPqwAU14FIpuQUrJf1QSKtCGsT2Et4xhFo"
        />
        <meta property="og:description" content="Software Developer" />
        <meta
          name="description"
          content="Yenum.dev is a Software developer writer and a creative nomad"
        />
        <meta property="og:url" content="https://yenum.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <img
          src={image}
          alt="bg img"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-32 md:pt-32 lg:pt-32 px-8">
          <div className="row">
            <div className="col-12">
              <h1 className="text-6xl text-blue-500 text-center  font-bold cursive leading-none lg:leading-snug lg:home-name">
                Yenum Opone
              </h1>
            </div>
            <div className="col-12">
              <p className="text-2xl text-gray-200 pt-12 cursive text-center">
                Software Developer | Aspiring Game Programmer
              </p>
            </div>
            <br />
            <div className="col-12">
              <span className="text-center">
                <a href="https://wakatime.com/@13233379-b294-4919-aa78-a47fd8c24385">
                  <img
                    src="https://wakatime.com/badge/user/13233379-b294-4919-aa78-a47fd8c24385.svg"
                    alt="Total time coded since Nov 20 2021"
                  />
                </a>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="col-start-1 col-end-4">
                <a
                  href="https://play.unity.com/u/officialyenum"
                  alt="Play My Games On Unity"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="mx-1"
                >
                  <IconBtn
                    icon="mdi:unity"
                    color="blue"
                    text="My Games On"
                    clickUrl="https://play.unity.com/u/officialyenum"
                  />
                </a>
              </div>
              <div className="col-end-6 col-span-1">
                <a
                  href="https://officialyenum.medium.com/"
                  alt="Read My Stories on medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="mx-1"
                >
                  <IconBtn
                    icon="mdi:medium"
                    color="gray"
                    text="My Articles on"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
        </section>
      </main>
    </>
  );
};

export default Home;

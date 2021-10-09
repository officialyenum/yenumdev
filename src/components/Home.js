import React from "react";
import IconBtn from "./UI/IconBtn";
import image from "../assets/images/portfolio.jpg";

const Home = () => {
  return (
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
          <div class="grid grid-cols-2 gap-6">
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
                <IconBtn icon="mdi:medium" color="gray" text="My Articles on" />
              </a>
            </div>
          </div>
        </div>
        <br />
      </section>
    </main>
  );
};

export default Home;

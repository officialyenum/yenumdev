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
      <section className="relative flex justify-center min-h-screen pt-12 md:pt-32 lg:pt-32 px-8">
        <div className="row">
          <div className="col-12">
            <h1 className="text-6xl text-blue-500 font-bold cursive leading-none lg:leading-snug lg:home-name">
              Hello, I'm Yenum Opone
            </h1>
          </div>
          <div className="col-12">
            <p className="text-2xl text-gray-200 pt-12 cursive text-center">
              Software Developer | Aspiring Game Programmer
            </p>
          </div>
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
              text="Play My Games On Unity"
              clickUrl="https://play.unity.com/u/officialyenum"
            />
          </a>
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
              text="Read My Stories on medium"
            />
          </a>
        </div>
        <br />
      </section>
    </main>
  );
};

export default Home;

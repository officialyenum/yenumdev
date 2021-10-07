import React from "react";
import { SocialIcon } from "react-social-icons";
import IconBtn from "./UI/IconBtn";

const Home = () => {
  return (
      <div className="hero-full-container background-image-container white-text-container showBGImage">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="hero-full-wrapper">
                <div className="text-content">
                <h1 style={{ fontSize: 48 }}>Hello World, 
                    <br/>
                    <span className="text-info"  style={{ fontSize: 36 }}>
                        I'm Yenum
                    </span>
                </h1>
                <p style={{ fontSize: 24 }}>
                    <span className="text-info">
                      Software Developer | Aspiring Unity Generalist
                    </span>
                </p>
                  {/* <h1>
                    Hello,
                    <br />
                  </h1>
                  <p style={{ fontSize: 48 }}>
                    <span id="typed-strings">
                      <span> I'm Yenum</span>
                      <span>Software Developer</span>
                      <span>Aspiring Game Developer</span>
                    </span>
                    <span id="typed"></span>
                  </p> */}
                  <br />
                  <div className="ml-5 my-8">
                    <SocialIcon
                      url="https://instagram.com/officialyenum"
                      className="mr-4"
                      target="_blank"
                      fgColor="#fff"
                      style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                      url="https://twitter.com/officialyenum"
                      className="mr-4"
                      target="_blank"
                      fgColor="#fff"
                      style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                      url="https://github.com/officialyenum"
                      className="mr-4"
                      target="_blank"
                      fgColor="#fff"
                      style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                      url="https://linkedin.com/in/yenum"
                      className="mr-4"
                      target="_blank"
                      fgColor="#fff"
                      style={{ height: 35, width: 35 }}
                    />
                  </div>
                  <br />
                  <div className="ml-5 my-2 inline-flex">

                  <a
                      href="https://play.unity.com/u/officialyenum" 
                      alt="Play My Games On Unity"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{textDecoration: "none"}}
                      className="mx-4"
                      >
                    <IconBtn icon="mdi:unity" color="blue" text="Play My Games On Unity" clickUrl="https://play.unity.com/u/officialyenum" />
                    </a>
                    <a
                      href="https://officialyenum.medium.com/" 
                      alt="Read My Articles on medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{textDecoration: "none"}}
                      className="mx-4"
                      >
                    <IconBtn icon="mdi:medium" color="gray" text="Read My Articles on medium" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;

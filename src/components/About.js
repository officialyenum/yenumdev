import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section-container">
      <section>
        <h1>About Me</h1>
        <h2>Get to Know me</h2>
        <div>
          <article>
            <Link>
              <span>
                {/* <img /> */}
                <span>
                  {/* <h3></h3> */}
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;

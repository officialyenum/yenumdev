import React from "react";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <div className="section-container">
      <section>
        <h1>Post Title</h1>
        <h2>Welcome to my page of Blog Posts</h2>
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

export default SinglePost;

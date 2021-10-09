import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <div className="hero-full-container background-image-container white-text-container showBGImage">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex text-gray-200 justify-center cursive mt-2">
            Blog
          </h1>
          <h2 className="text-lg text-gray-400 flex justify-center mb-12">
            Follow my Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postData &&
              postData.map((post, index) => (
                <article key={post.slug.current}>
                  <Link to={"/post/" + post.slug.current}>
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-400 text-red-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Post;

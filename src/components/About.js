import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
const About = () => {
  const [authorData, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
                name,
                bio,
                "authorImage" : image.asset->url
            }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  return (
    <div className="hero-full-container background-image-container white-text-container showBGImage">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl text-gray-200 flex justify-center cursive mt-2">
            About Me
          </h1>
          <h2 className="text-lg text-gray-400 flex justify-center mb-12">
            Get to Know Me
          </h2>
          <div></div>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div></div>
            {authorData && (
              <figure className="md:flex bg-gray-800 rounded-xl p-8 md:p-0 lg:p-0">
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <div className="prose lg:prose-xl text-lg font-semibold">
                      {/* {authorData.bio} */}
                      <BlockContent
                        className="text-gray-200"
                        blocks={authorData.bio}
                        projectId="0yaxkdtw"
                        dataset="production"
                      />
                    </div>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-cyan-600">{authorData.name}</div>
                    <div className="text-gray-500">
                      Software Engineer, Nigeria
                    </div>
                  </figcaption>
                </div>
                <img
                  className="w-32 h-32 lg:w-96 md:w-48 md:h-auto md:rounded-none rounded-full object-cover mx-auto"
                  src={urlFor(authorData.authorImage).url()}
                  alt=""
                  width="768"
                  height="512"
                />
              </figure>
            )}
            ;{!authorData && <div>Loading...</div>}
            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

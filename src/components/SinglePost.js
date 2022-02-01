import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Helmet } from "react-helmet";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
              title,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              body,
              "name": author->name,
              "authorImage": author->image
            }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return <div className="text-gray-200 text-center">Loading...</div>;

  return (
    <>
      <Helmet>
        <title>Yenum.dev| {singlePost.title}</title>
        <meta property="og:title" content={"Yenum's " + singlePost.title} />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C5603AQHng9Yw9HfvoA/profile-displayphoto-shrink_200_200/0/1636095704799?e=1642032000&v=beta&t=IHfrbn1CzVPqwAU14FIpuQUrJf1QSKtCGsT2Et4xhFo"
        />
        <meta property="og:description" content="Software Developer" />
        <meta
          name="description"
          content="Read through a host of Yenum.dev written articles"
        />
        <meta property="og:url" content={"https://yenum.dev/" + slug} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="hero-full-container background-image-container white-text-container showBGImage">
        <main className="min-h-screen lg:p-28 md:p-12 w-full">
          <article className="container shadow-lg mx-auto bg-gray-800 rounded-lg">
            <header className="relative">
              <div className="absolute h-full w-full flex items-center justify-center p-8">
                <div className="bg-white bg-opacity-70 rounded-lg p-12">
                  <h1 className="cursive  text-gray-900 text-3xl lg:text-6xl mb-4">
                    {singlePost.title}
                  </h1>
                  <div className="flex justify-center text-gray-800">
                    <img
                      src={urlFor(singlePost.authorImage).url()}
                      alt={singlePost.name}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <div className="flex justify-center text-gray-800">
                    <p className="cursive text-gray-700 flex items-center pl-2 text-2xl">
                      {singlePost.name}
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                className="w-full object-cover pt-10 rounded-t"
                style={{ height: "400px" }}
              />
            </header>
            <div className="px-16 py-12 lg:px-48 lg:py-20 prose lg:prose-xl max-w-full">
              <BlockContent
                className="text-gray-200"
                blocks={singlePost.body}
                projectId="0yaxkdtw"
                dataset="production"
              />
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default SinglePost;

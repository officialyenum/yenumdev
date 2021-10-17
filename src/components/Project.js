import React, { useState, useEffect } from "react";
import sanityClient from "../client";
const Project = () => {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
                title,
                date,
                place,
                description,
                projectType,
                link,
                urlText,
                tags
            }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);
  return (
    <div className="hero-full-container background-image-container white-text-container showBGImage">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex text-gray-200 justify-center cursive mt-2">
            My Projects
          </h1>
          <h2 className="text-lg text-gray-400 flex justify-center mb-12">
            Explore my Projects
          </h2>
          {projectData === null ? (
            <div className="text-gray-100 text-center">
              Loading... Please Wait...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData &&
                projectData.map((project, index) => (
                  <article key={index}>
                    <div className="px-2 py-3 bg-gray-800 rounded">
                      <span className="block relative h-full flex justify-center items-center pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-400 text-blue-200 bg-opacity-75 rounded">
                          {project.title}
                        </h3>
                      </span>
                      <p className="text-gray-300 text-md px-3 py-4 bg-opacity-15">
                        {project.description}
                      </p>

                      <div className="text-gray-500 text-xs space-x-4 my-5 px-3">
                        <span>
                          <strong className="font-bold">Finished on</strong>:{" "}
                          {new Date(project.date).toLocaleDateString()}
                        </span>
                        <span>
                          <strong className="font-bold">Location</strong>:{" "}
                          {project.place}
                        </span>
                        <span>
                          <strong className="font-bold">Type</strong>:{" "}
                          {project.projectType}
                        </span>
                      </div>
                      <span className="block relative h-full flex justify-end items-end px-4 pb-4">
                        <a
                          href={project.link}
                          alt={project.title}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-default shadow bg-gray-200 p-2 rounded"
                        >
                          {project.urlText}{" "}
                          <span role="img" aria-label="right pointer">
                            👉
                          </span>
                        </a>
                      </span>
                    </div>
                  </article>
                ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Project;

import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Project = () => {
    const [projectData, setProjectData] = useState(null);

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
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <div className="section-container">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my projects page
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData &&
              projectData.map((project, index) => (
                <article key={index}>
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    >
                      <div className="card-container card-container-lg">
                          <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                              <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                              {project.title}
                              </h3>
                          </span>
                          <div className="text-gray-500 text-xs space-x-4">
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
                          <a 
                                  href={project.Link} 
                                  alt={project.title}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-default"
                                  >{project.urlText}{" "}<span role="img" aria-label="right pointer">👉</span></a>
                          
                      </div>
                    </span>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Project;

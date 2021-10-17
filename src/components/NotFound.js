import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero-full-container background-image-container white-text-container showBGImage">
      <main className="min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex text-gray-200 justify-center cursive mt-2">
            404 Error
          </h1>
          <h2 className="text-lg text-gray-400 flex justify-center mb-12">
            Page Not Found
          </h2>
          <Link to="/" className="btn btn-success">
            Return To Home Page
          </Link>
        </section>
      </main>
    </div>
  );
};

export default NotFound;

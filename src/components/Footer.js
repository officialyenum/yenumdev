import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                About
              </span>
              <span className="my-2">
                <NavLink
                  to="/about"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  About
                </NavLink>
              </span>
              <span className="my-2">
                <NavLink
                  to="/project"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  My Projects
                </NavLink>
              </span>
              <span className="my-2">
                <NavLink
                  to="/blog"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Blog
                </NavLink>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Contact
              </span>
              <span className="my-2">
                <a
                  href="mailto:oponechukwuyenum@gmail.com"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  oponechukwuyenum@gmail.com
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://dashboard.yenum.dev/cv/chukwuyenum.pdf"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  My CV
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Certificates
              </span>
              <span className="my-2">
                <a
                  href="https://certificates.cs50.io/dca861dc-1614-42ed-a59f-1b56949d851f"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Havard CS50
                </a>
              </span>
              <span className="my-2">
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Havard GD50 (Ongoing)
                </a>
              </span>
              <span className="my-2">
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Unity Badge (Ongoing)
                </a>
              </span>
              <span className="my-2">
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Udacity - Nanodegree (Ongoing)
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © YENUM.DEV | Portfolio created with ReactJS {"& "}
              <a
                href="https://www.sanity.io/"
                title="Create website with free html template"
                className="text-info"
              >
                Sanity.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

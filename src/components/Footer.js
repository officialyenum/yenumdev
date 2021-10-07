import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container navbar-fixed-bottom text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="text-white">
              © YENUM.DEV | Portfolio created with ReactJS {"& "} 
              <a
                href="https://www.sanity.io/"
                title="Create website with free html template"
                className="text-info"
              >
                Sanity.io
              </a>
              {" Template From :"}
              <a
                href="http://www.mashup-template.com/"
                title="Create website with free html template"
                className="text-info"
              >
                Mashup
              </a>
              /
              <a 
                href="https://www.unsplash.com/" 
                title="Beautiful Free Images"
                className="text-info">
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="text-white">
              © YENUM.DEV | Website created with{" "}
              <a
                href="http://www.mashup-template.com/"
                title="Create website with free html template"
                className="text-primary"
              >
                Mashup Template
              </a>
              /
              <a 
                href="https://www.unsplash.com/" 
                title="Beautiful Free Images"
                className="text-primary">
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

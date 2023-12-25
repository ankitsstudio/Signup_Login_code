import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="">
        <footer className="text-center text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
              </p>
            </section>
          </div>
          <div className="text-center p-3">© 2020 Copyright:
            <Link className="text-white" href="https://mdbootstrap.com/">
              DACBOZ.com
            </Link>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid my-5">
      <footer className="text-center text-lg-start text-dark" >
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: "#21D192" }}>
          <div className="text-white bold fs-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <Link to="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#" className="text-white me-4"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="text-white me-4"><i className="fab fa-google"></i></Link>
            <Link to="#" className="text-white me-4"><i className="fab fa-instagram"></i></Link>
            <Link to="#" className="text-white me-4"><i className="fab fa-linkedin"></i></Link>
            <Link to="#" className="text-white me-4"><i className="fab fa-github"></i></Link>
          </div>
        </section>

        <section className="text-white">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-dark">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>Here you can use rows and columns to organize your footer content.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-dark">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><Link to="#" className="text-success">MDBootstrap</Link></p>
                <p><Link to="#" className="text-success">MDWordPress</Link></p>
                <p><Link to="#" className="text-success">BrandFlow</Link></p>
                <p><Link to="#" className="text-success">Bootstrap Angular</Link></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-dark">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><Link to="#" className="text-success">Your Account</Link></p>
                <p><Link to="#" className="text-success">Become an Affiliate</Link></p>
                <p><Link to="#" className="text-success">Shipping Rates</Link></p>
                <p><Link to="#" className="text-success">Help</Link></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold text-dark">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><i className="fas fa-home mr-3"></i> Agartala, NIT-A 799047, INDIA</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright: <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
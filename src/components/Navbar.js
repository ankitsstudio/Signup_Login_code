import React from "react";
import { Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem("authToken");
      navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Learn English
          </Link>
          <div className="container-fluid d-flex ">
            <div className="col me-auto d-flex py-3">
              <Link className="nav-link active text-white bold fs-4" to="/">
                Home
              </Link>
              {(localStorage.getItem("authToken"))?
               <div>
               <Link className="nav-link active text-white bold fs-4" to="/myaccount">
                My Account
              </Link>
               </div>
            :""}
            </div>
            {(!localStorage.getItem("authToken"))?
            <div className="d-flex">
              <div className="col  px-3 py-3">
                <Link className="btn bg-white text-success" to="/login">
                  Login
                </Link>
              </div>
              <div className="col  px-3 py-3">
                <Link className="btn bg-white text-success" to="/signUp">
                  SignUp
                </Link>
              </div>
            </div>
            :<div className="d-flex">
              <div className="col  px-3 py-3">
                <Link className="btn bg-white text-success" to="/">
                Grade
                </Link>
              </div>
              <div className="col  px-3 py-3">
                <Link className="btn bg-white text-danger" to="/login" onClick={handleLogout}>
                  LogOut
                </Link>
              </div>
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

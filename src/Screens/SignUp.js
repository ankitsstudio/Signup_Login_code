import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });

    console.log(response);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);

      let errorMessage = "Already Signed In/Email Exists";

      try {
        const errorJson = await response.json();
        if (errorJson && errorJson.errors) {
          errorMessage = errorJson.errors
            .map((error) => `${error.msg} of ${error.path}`)
            .join(", ");
        }
      } catch (error) {
        errorMessage = await response.text();
      }

      alert(`Error: ${errorMessage}`);
    } else {
      const jsonData = await response.json();
      console.log(jsonData);

      if (!jsonData.success) {
        alert("Enter valid credentials");
      } else {
        alert(jsonData.message);
        navigate("/login");
      }
    }
  };
  return (
    <div>
      <h3 className="text-center text-white pt-5">Signup form</h3>
      <div className="container" >
        <div className="row justify-content-center align-items-center" >
          <div className="col-md-6">
            <div className="col-md-12 form-control bg-success" >
              <form onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label text-black">
                    Name:
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="namelHelp"
                    name="name"
                    value={data.name}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label text-black">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value });
                    }}
                  />
                  <div id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="form-label text-black">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    name="password"
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value });
                    }}
                  />
                  <div id="emailHelp" className="form-text text-white">
                    We'll never share your password with anyone else.
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

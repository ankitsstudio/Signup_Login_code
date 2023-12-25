import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      
      let errorMessage = "Invalid credentials";

      try {
        const errorJson = await response.json();
        if (errorJson && errorJson.errors) {
          errorMessage = errorJson.errors.map(error => `${error.msg} of ${error.path}`).join(', ');
        }
      } catch (error) {
        errorMessage = await response.text();
      }

      alert(`Error: ${errorMessage}`);
    } else {
      const jsonData = await response.json();
      console.log(jsonData);

      if (!jsonData.success) {
        alert("Invalid credentials");
      } else {
        alert("Login successful");
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={loginData.email}
            onChange={(e) => {
              setLoginData({ ...loginData, [e.target.name]: e.target.value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({ ...loginData, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

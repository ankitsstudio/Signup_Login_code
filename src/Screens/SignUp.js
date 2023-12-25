import React, { useState } from "react";
import { json } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({ name: "", email: "", password: ""});

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
    alert("Enter valid credentials");
  } else {
    alert(jsonData.message);
  }
}

  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
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
            value={data.email}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
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
            id="exampleInputPassword"
            name="password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;

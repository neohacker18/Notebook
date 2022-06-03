import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success)
    {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/")
      props.showAlert("Account Created Successfully","success")
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
  }


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container' style={{ marginTop: '60px' }}>
      <h2>Create an account to use Notebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" onChange={onChange} name="password" placeholder="Password" minLength={5} required/>
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Password</label>
          <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" placeholder="Confirm Password" minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
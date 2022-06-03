import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({email:"",password:""})
  let navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response =await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password:credentials.password})
    });
    const json=await response.json();
    console.log(json);
    if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      props.showAlert("Logged In Successfully","success")
      navigate ("/")

    }
    else{
      props.showAlert("Invalid Details","danger")
    }
  }

  
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className='container' style={{marginTop:'60px'}}>
      <h2>Login to continue with Notebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" onChange={onChange} name="email" value={credentials.email} aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
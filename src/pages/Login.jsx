import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import "./Login.css";
export default function Login() {
  const navigate =useNavigate();
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });
  const [message,setMessage]=useState("");
  const handleChange = (event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
    setMessage("");
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    const name = formData.email.split("@")[0];
    setMessage(`Login successful! Welcome ${name} to TravelEase.`);
    setFormData({
      email:"",
      password:""
    });
    setTimeout(()=>{
      navigate("/");
    },1500);
  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <p className="login-label">WELCOME BACK</p>
        <h1>Login to TravelEase</h1>
        <p className="login-description">
          Sign in to continue planning your next adventure.
        </p>
        <label htmlFor="login-email">Email Address</label>
        <input type="email" name="email" id="login-email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="login-password">Password</label>
        <input type="password" name="password" id="login-password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        {message && (
          <p className="login-message" role="status">{message}</p>
        )}
        <p className="login-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

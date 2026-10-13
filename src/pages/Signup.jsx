import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./Signup.css"
export default function Signup() {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
  const [message,setMessage]= useState("");
  const handleChange=(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
    setMessage("");
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      setMessage("Passwords do not match. Please try again.");
      return;
    }
    setMessage("Signup sucessful! Welcome to TravelEase.");
    setFormData({
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
    });
    setTimeout(()=>{
      navigate("/login");
    },1500);
  };
  return (
    <div className='signup-page'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <p className='signup-label'>START YOUR JOURNEY</p>
        <h1>Create an Account</h1>
        <p className='signup-description'>
          Join TravelEase and start exploring new destinations.
        </p>
        <label htmlFor="signup-name">Full Name</label>
        <input type="text" name="name" id="signup-name" placeholder='Enter your full name' value={formData.name} onChange={handleChange} required />
        <label htmlFor="signup-email">Email Address</label>
        <input type="email" name="email" id="signup-email" placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
        <label htmlFor="signup-password">Password</label>
        <input type="password" name="password" id="signup-password" placeholder='Create a password' value={formData.password} onChange={handleChange} required minLength={6}/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirm-password" placeholder='Re-enter your password' value={formData.confirmPassword} onChange={handleChange} required minLength={6}/>
        <button type='submit'>Create Account</button>
        {message && (<p className='signup-message' role='status'>{message}</p>)}
        <p className='signup-login'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}


import {useState} from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });
  const [sucessMessage, setSucessMessage] = useState("");
  const handleChange = (event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
    setSucessMessage("");
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    setSucessMessage(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({
      name:"",
      email:"",
      subject:"",
      message:"",
    });
  };
  return (
    <div className="contact-page">
      <section className="contact-header">
        <p>WE ARE HERE TO HELP</p>
        <h1>Contact Us</h1>
        <p>
          Have a question about your next trip? Send us a message.
        </p>
      </section>
      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We would love to hear from you. Contact us with your questions, suggestions, or travel-realted enquiries.
          </p>
          <div className="contact-detail">
            <h3>Our Service</h3>
            <p>Travel planning and destination information</p>
          </div>
          <div className="conatct-detail">
            <h3>Response Time</h3>
            <p>We aim to respond as soon as possible.</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <label htmlFor="contact-name">Full Name</label>
          <input type="text" name="name" id="contact-name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required/>
          <label htmlFor="contact-email">Email Address</label>
          <input type="email" name="email" id="contact-email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="contact-subject">Subject</label>
          <input type="text" name="subject" id="contact-subject" placeholder="Enter the subject" value={formData.subject} onChange={handleChange} required />
          <label htmlFor="contact-message">Message</label>
          <textarea name="message" id="contact-message" placeholder="Write your message here" rows="5" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
          {sucessMessage && (<p className="contact-success" role="status">{sucessMessage}</p>)}
        </form>
      </section>
    </div>
  )
}

import {useState} from 'react';
import "./Bookings.css"

export default function Bookings() {
  const [formData, setFormData]=useState({
    name:"",
    email:"",
    destination:"",
    travelDate:"",
    travelers:"1"
  });
  const [message, setMessage] = useState("");
  const handleChange=(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    setMessage(`Thank you, ${formData.name}! Your booking request for ${formData.destination} has been received.`);
    setFormData({
      name:"",
      email:"",
      destination:"",
      travelDate:"",
      travelers:"1",
    });
  };
  return (
    <div className='bookings-page'>
      <section className='bookings-header'>
        <p>YOUR JOURNEY STARTS HERE</p>
        <h1>Book Your Next Adventure</h1>
        <p>Fill in your travel details to submit a booking request.</p>
      </section>
      <form className='booking-form' onSubmit={handleSubmit}>
        <h2>Travel Booking Form</h2>
        <label htmlFor="name">Full Name</label>
        <input type="text" id='name' name='name' placeholder='Enter your full name' value={formData.name} onChange={handleChange} required/>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} required/>
        <label htmlFor="destination">Destination</label>
        <select name="destination" id="destination" value={formData.destination} onChange={handleChange} required>
          <option value="">Choose a destination</option>
          <option value="Goa">Goa</option>
          <option value="Manali">Manali</option>
          <option value="Udaipur">Udaipur</option>
          <option value="Agra">Agra</option>
          <option value="Jaipur">Jaipur</option>
        </select>
        <label htmlFor="travelDate">Travel Data</label>
        <input type="date" name="travelDate" id="travelDate" value={formData.travelDate} onChange={handleChange} min={new Date().toLocaleDateString("en-CA")} required />
        <label htmlFor="travelers">Number of Travelers</label>
        <select name="travelers" id="travelers" value={formData.travelers} onChange={handleChange} required>
          <option value="1">1 Traveler</option>
          <option value="2">2 Travelers</option>
          <option value="3">3 Travelers</option>
          <option value="4">4 Travelers</option>
          <option value="5">5 Travelers</option>
        </select>
        <button type='submit'>Submit Booking</button>
        {message && (<p className='booking-message' role='status'>{message}</p>)}
      </form>
    </div>
  );
};

import {useNavigate} from 'react-router-dom';
import "./Hotels.css"

export default function Hotels() {
  const navigate = useNavigate();
  const hotels=[
    {
      id:1,
      name:"Ocean View Resort",
      location:"Goa, India",
      rating:4.8,
      price:3500,
      description:"Enjoy beautiful sea views, comfortable rooms, and relaxing beachside stays."
    },
    {
      id:2,
      name:"Mountain Paradise",
      location:"Manali, India",
      rating:4.6,
      price:2800,
      description:"Experience peaceful mountain views and a refreshing nature retreat."
    },
    {
      id:3,
      name:"Royal Lake Palace",
      location:"Udaipur, India",
      rating:4.9,
      price:5000,
      description:"Discover royal hospitality and beautiful lake surroundings.",
    },
  ];
  return (
    <div className='hotels-page'>
      <section className='hotels-header'>
        <p>STAY COMFORTABLY</p>
        <h1>Find Your Perfect Stay</h1>
        <p>Explore comfortable stays for your next memorable journey.</p>
      </section>
      <section className='hotels-list'>
        {hotels.map((hotel)=>(
          <div className="hotel-card" key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>⭐ {hotel.rating}</p>
            <p>{hotel.description}</p>
            <h3>₹{hotel.price.toLocaleString("en-IN")} / night</h3>
            <button onClick={()=>navigate("/bookings")}>Book Hotel</button>
          </div>
        ))}
      </section>
    </div>
  )
}

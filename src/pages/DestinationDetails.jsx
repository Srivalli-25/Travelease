import {useParams, useNavigate} from 'react-router-dom';
import { destinations } from '../data/destinations';
import "./DestinationDetails.css";
export default function DestinationDetails() {
  const {id} = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((item)=>String(item.id)===id);
  if(!destination){
    return(
      <div className="destination-details-page">
        <h1>Destination not found</h1>
        <button onClick={()=>navigate("/destinations")}>Back to Destinations</button>
      </div>
    );
  }
  return (
    <div className='destination-details-page'>
        <button onClick={()=>navigate("/destinations")}>← Back to Destinations</button>
        <img src={destination.image} alt={destination.name} />
      <h1>{destination.name}</h1>
      <p>{destination.country}</p>
      <p>{destination.description}</p>
      <p>Category: {destination.category}</p>
      <h2>Starting from ₹{destination.price}</h2>
      <button onClick={()=>navigate("/bookings")}>Book This Trip</button>
    </div>
  )
}

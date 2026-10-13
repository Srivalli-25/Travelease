import { useNavigate } from "react-router-dom";
import "./Packages.css"
export default function Packages() {
  const navigate = useNavigate();
const packages = [
  {
    id: 1,
    destinationId:"goa",
    name: "Beach Escape",
    destination: "Goa",
    duration: "3 Days / 2 Nights",
    price: 7999,
    description: "Relax on sunny beaches and enjoy beautiful sunsets.",
  },
  {
    id: 2,
    destinationId:"manali",
    name: "Mountain Adventure",
    destination: "Manali",
    duration: "5 Days / 4 Nights",
    price: 12999,
    description: "Explore mountain views and refreshing nature.",
  },
  {
    id: 3,
    destinationId:"udaipur",
    name: "Royal Heritage",
    destination: "Udaipur",
    duration: "4 Days / 3 Nights",
    price: 9999,
    description: "Discover royal palaces, lakes, and rich history.",
  },
];

  return (
    <div className="packages-page">
      <section className="packages-header">
        <p>TRAVEL YOUR WAY</p>
        <h1>Explore Our Travel Packages</h1>
        <p>Find a trip that matches your budget, interests, and dream destinations.</p>
      </section>
      <section className="packages-list">
        {packages.map((item)=>(
          <div className="package-card" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.destination}</p>
            <p>{item.duration}</p>
            <p>{item.description}</p>
            <h3>Starting from ₹{item.price.toLocaleString("en-IN")}</h3>
            <button onClick={()=>navigate(`/destinations/${item.destinationId}`)}>View Package</button>
          </div>
        ))}
      </section>
    </div>
  )
}

import { useNavigate } from "react-router-dom"
import "./Home.css"
export default function Home() {
    const navigate =useNavigate();
  return (
    <div className="home-page">
        <section className="hero-section">
            <div className="hero-content">
                <p className="hero-tagline">YOUR NEXT ADVENTURE STARTS HERE</p>
                <h1>Discover Places
                    <br />
                    Create Memories
                </h1>
                <p className="hero-description">
                    Explore beautiful destinations, find comfortable stays, and plan your next unforgettable journey with TravelEase.
                </p>
                <button onClick={()=>navigate("/destinations")} className="explore-button">Explore Destinations</button>
            </div>
        </section>
        <section className="home-intro">
            <h2>Explore the  with TravelEase</h2>
            <p>From peaceful beaches to breathtaking mountains, discover places that make every journey special.</p>
        </section>
    </div>
  )
}

import "./About.css"
export default function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <p>GET TO KNOW US</p>
        <h1>About TravelEase</h1>
        <p>Making every journey simple, memorable, and enjoyable.</p>
      </section>
      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            TravelEase is a travel planning platform designed to help travelers explore beautiful destinations, discover comfortable hotels, and find suitable travel packages in one place.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make travel planning easier by providing a simple and user-friendly experience for discovering destinations and organizing trips.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose TravelEase?</h2>
          <ul>
            <li>Explore a variety of destinations.</li>
            <li>Discover travel packages for different budgets.</li>
            <li>Find comfortable hotel options.</li>
            <li>Submit trip requests through a simple booking form.</li>
            <li>Enjoy an easy-to-use, responsive website.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

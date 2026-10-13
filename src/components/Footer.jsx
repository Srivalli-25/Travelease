import {Link} from 'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
            <h2>Travel<span>Ease</span></h2>
            <p>Discover places. Create memories.</p>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/destinations">Destinations</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <p className='footer-copy'>
            © 2026 TravelEase. All rights reserved.
        </p>
    </footer>
  )
}

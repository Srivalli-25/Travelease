import {NavLink,Link}  from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
        Travel<span>Ease</span></Link>
        <div className="navbar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/destinations">Destinations</NavLink>
            <NavLink to="/packages">Packages</NavLink>
            <NavLink to="/hotels">Hotels</NavLink>
            <NavLink to="/bookings">My Bookings</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/favorites">Favorites ♥</NavLink>
        </div>
        <div className="navbar-auth">
            <Link to="/login" className="login-link">Login</Link>
            <Link to="/signup" className="signup-link">Sign Up</Link>
        </div>
    </nav>
  )
}

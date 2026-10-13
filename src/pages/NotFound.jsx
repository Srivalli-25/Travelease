import {Link} from "react-router-dom";
import "./NotFound.css"
export default function NotFound() {
  return (
    <div className="not-found-page">
      <p className="not-found-code">404</p>
      <h1>Oops! Page Not Found</h1>
      <p className="not-found-description">
        The page you are looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="not-found-button">Back to home</Link>
    </div>
  )
}

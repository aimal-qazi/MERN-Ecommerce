import { Link } from "react-router-dom";
import "../styles/notfound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn-home">Go Back Home</Link>
    </div>
  );
}

export default NotFound
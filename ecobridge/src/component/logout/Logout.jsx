import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";

export default function Logout() {
  useEffect(() => {
    console.log("User logged out");
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-4">
      <div className="text-center col-lg-8 mx-auto">
        {/* Image */}
        <div className="mb-4">
          <img
            // src={goodbyeImage} 
            alt="Peaceful sunset scene with floating musical notes and creative elements"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
        </div>

        {/* Icon */}
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="rounded-circle bg-warning bg-opacity-25 d-flex align-items-center justify-content-center" style={{ width: "64px", height: "64px" }}>
            <Heart size={32} className="text-warning" />
          </div>
        </div>

        {/* Heading & message */}
        <h1 className="fw-bold mb-3">Thank You for Creating</h1>
        <p className="lead text-muted mb-4">
          Your creative spirit has brightened our community. We hope to see you again soon to continue building bridges through art, music, and expression.
        </p>

        {/* Button */}
        <div className="mb-4">
          <Link to="/" className="btn btn-primary d-inline-flex align-items-center">
            <Home size={18} className="me-2" />
            Return to Sign In
          </Link>
        </div>

        <p className="small text-muted mb-5">
          Remember: Every voice matters, every story counts
        </p>

        {/* Footer section */}
        <div className="text-center mt-5">
          <h2 className="fw-bold mb-2">EcoBridge</h2>
          <p className="text-muted mb-3">Empowering creativity for all abilities</p>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/help" className="text-decoration-none">
              Help Center
            </Link>
            <Link to="/community" className="text-decoration-none">
              Community
            </Link>
            <Link to="/accessibility" className="text-decoration-none">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

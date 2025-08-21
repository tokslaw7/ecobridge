import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Left Side */}
        <div className="col-lg-6 d-flex flex-column justify-content-center bg-light p-5">
          <div className="mx-auto mx-lg-0" style={{ maxWidth: "500px" }}>
            <h1 className="fw-bold mb-3">EcoBridge</h1>
            <div className="bg-primary mb-3" style={{ height: "4px", width: "60px" }}></div>
            <p className="fst-italic text-muted">
              "Join our inclusive creative community"
            </p>

            <div className="border border-2 rounded p-3 mb-4 bg-white">
              <img
                src="https://via.placeholder.com/500x250"
                alt="Diverse hands coming together"
                className="img-fluid rounded"
                style={{ height: "250px", objectFit: "cover", width: "100%" }}
              />
            </div>

            <ul className="list-unstyled d-none d-lg-block">
              <li className="mb-2">🎵 Express through Music</li>
              <li className="mb-2">🎨 Create Visual Art</li>
              <li className="mb-2">🤝 Connect with Others</li>
              <li>♿ Fully Accessible Platform</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <div className="text-center mb-4">
              <div
                className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <UserPlus size={28} className="text-primary" />
              </div>
              <h2 className="fw-bold">Join EcoBridge</h2>
              <p className="text-muted">Start your creative journey today</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Create Account
              </button>
            </form>

            <div className="text-center my-4">
              <span className="text-muted">or</span>
            </div>

            <div className="border rounded p-3 text-center">
              <Link to="/" className="text-primary fw-medium">
                Sign In to Existing Account
              </Link>
            </div>

            <div className="text-center mt-4 text-muted small">
              <p>Building bridges through creative expression</p>
              <div>
                <Link to="/help" className="text-decoration-none me-2">
                  Help
                </Link>
                •
                <Link to="/privacy" className="text-decoration-none mx-2">
                  Privacy
                </Link>
                •
                <Link to="/terms" className="text-decoration-none ms-2">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

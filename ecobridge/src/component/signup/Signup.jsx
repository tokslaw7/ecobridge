import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // simple validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    console.log("Signup attempt:", formData);
    setLoading(false);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column bg-light">
      <div className="row flex-grow-1">
        {/* Left Side */}
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5 bg-white">
          <h1 className="fw-bold mb-3">EcoBridge</h1>
          <div className="bg-primary mb-3" style={{ height: "4px", width: "60px" }}></div>
          <p className="fst-italic text-muted">
            "Join our inclusive creative community"
          </p>
          <div className="border border-2 rounded p-3 mb-4">
            <img
              src="https://via.placeholder.com/500x250"
              alt="Diverse hands coming together"
              className="img-fluid rounded"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
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

            {error && (
              <div className="alert alert-danger text-center py-2">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label fw-semibold">
                    First Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <User size={20} />
                    </span>
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
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label fw-semibold">
                    Last Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <User size={20} />
                    </span>
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
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-semibold">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <User size={20} />
                  </span>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <Mail size={20} />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <Lock size={20} />
                  </span>
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
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-semibold">
                  Confirm Password
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <Lock size={20} />
                  </span>
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
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted">Already have an account?</span>{" "}
              <Link to="/" className="text-primary fw-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

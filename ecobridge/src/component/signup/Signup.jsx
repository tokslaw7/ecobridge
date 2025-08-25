import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import handsTogether from "../../assets/img/Hands-Together.jpg";

const iconStyle = {
  position: "absolute",
  left: "1rem",
  top: "50%",
  transform: "translateY(-50%)",
  color: "var(--bs-secondary-color, #6c757d)",
  pointerEvents: "none",
};

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5901/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
       {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center bg-white p-5 border-end">
          {/* Title aligned left above image */}
          <div className="mb-4">
            <h1 className="display-5 fw-bold text-warning mb-1">EcoBridge</h1>
            <hr className="border-3 border-warning opacity-100 w-25 m-0" />
          </div>

          <p className="lead fst-italic mb-4">
            "Every voice matters, every story counts"
          </p>

          <div
            className="border border-2 border-dashed rounded p-0 bg-light mb-4"
            style={{ height: "260px", overflow: "hidden" }}
          >
            <img
              src={handsTogether}
              alt="Hands Together w/Community"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          <ul className="list-unstyled text-muted">
            <li>🎵 Express through Music</li>
            <li>🎨 Create Visual Art</li>
            <li>🤝 Connect with Others</li>
            <li>🌍 Fully Accessible Platform</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="col-lg-6">
          <div style={{ maxWidth: "450px", margin: "0 auto" }}>
            <div className="text-center mb-4">
              <div
                className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-person text-primary fs-4"></i>
              </div>
              <h2 className="fw-bold">Join EcoBridge</h2>
              <p className="text-muted">Start your creative journey today</p>
            </div>

            {error && <div className="alert alert-danger text-center py-2">{error}</div>}

            <form onSubmit={onSubmit}>
              {/* First/Last side by side */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="position-relative mb-3">
                    <i className="bi bi-person" style={iconStyle}></i>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control ps-5"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="position-relative mb-3">
                    <i className="bi bi-person" style={iconStyle}></i>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control ps-5"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Username */}
              <div className="position-relative mb-3">
                <i className="bi bi-person-badge" style={iconStyle}></i>
                <input
                  type="text"
                  name="username"
                  className="form-control ps-5"
                  placeholder="Username"
                  value={form.username}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="position-relative mb-3">
                <i className="bi bi-envelope" style={iconStyle}></i>
                <input
                  type="email"
                  name="email"
                  className="form-control ps-5"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="position-relative mb-3">
                <i className="bi bi-lock" style={iconStyle}></i>
                <input
                  type="password"
                  name="password"
                  className="form-control ps-5"
                  placeholder="Password"
                  value={form.password}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="position-relative mb-4">
                <i className="bi bi-lock-fill" style={iconStyle}></i>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control ps-5"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={onChange}
                  required
                />
              </div>

              {/* Orange CTA (not green) */}
              <button
                type="submit"
                disabled={loading}
                className="btn w-100 fw-semibold text-white"
                style={{ backgroundColor: "#fd7e14", borderColor: "#fd7e14" }}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="text-center my-3 text-muted">or</div>

            <div className="border border-2 border-dashed rounded p-3 text-center mb-4 bg-white">
              <Link to="/login" className="text-primary fw-medium text-decoration-none">
                Sign In to Existing Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

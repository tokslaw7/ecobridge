import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
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

  //     try {
  //     const res = await fetch("http://localhost:5901/signup/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password, username }),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.message || "Signup failed");
  //     }

  //     // Save token + user info
  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("user", JSON.stringify(data.user));

  //     navigate("/dashboard"); // redirect after signup
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <div className="text-center mb-4">
              <div className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px" }}>
                <User size={28} className="text-primary" />
              </div>
              <h2 className="fw-bold">Join EcoBridge</h2>
              <p className="text-muted">Start your creative journey today</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col position-relative">
                  <User size={18} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"/>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control ps-5"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col position-relative">
                  <User size={18} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"/>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control ps-5"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 position-relative">
                <User size={18} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"/>
                <input
                  type="text"
                  name="username"
                  className="form-control ps-5"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <Mail size={18} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"/>
                <input
                  type="email"
                  name="email"
                  className="form-control ps-5"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <Lock size={18} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"/>
                <input
                  type="password"
                  name="password"
                  className="form-control ps-5"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 position-relative">
                <Lock size={18} className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"/>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control ps-5"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Create Account</button>
            </form>

            <div className="text-center my-4 text-muted">or</div>

            <div className="border rounded p-3 text-center">
              <Link to="/login" className="text-primary fw-medium">
                Sign In to Existing Account
              </Link>
            </div>

            <div className="text-center mt-4 text-muted small">
              <p>Building bridges through creative expression</p>
              <div>
                <Link to="/help" className="text-decoration-none me-2">Help</Link>•
                <Link to="/privacy" className="text-decoration-none mx-2">Privacy</Link>•
                <Link to="/terms" className="text-decoration-none ms-2">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

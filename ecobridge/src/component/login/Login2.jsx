import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User } from "lucide-react";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5901/login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token + user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard"); // redirect after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center bg-white p-5 border-end">
          <h1 className="display-5 fw-bold mb-3">EcoBridge</h1>
          <div className="mb-4">
            <hr className="w-25 border-2 border-primary opacity-100" />
          </div>
          <p className="lead fst-italic mb-4">
            "Every voice matters, every story counts"
          </p>
          <div className="border border-2 border-dashed rounded p-4 bg-light">
            <img
              // src={creativeImage}
              alt="Diverse community engaged in creative activities"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <div className="text-center mb-4">
              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "60px", height: "60px" }}>
                <User size={28} className="text-secondary" />
              </div>
              <h2 className="fw-bold">Welcome Back</h2>
              <p className="text-muted">Continue your creative journey</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-semibold">Username</label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="yourusername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="alert alert-danger text-center py-2">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted small">or</span>
              <hr className="flex-grow-1" />
            </div>

            <div className="border border-2 border-dashed rounded p-3 text-center">
              <Link to="/signup" className="fw-medium text-primary text-decoration-none">
                Create New Account
              </Link>
            </div>

            <div className="text-center mt-4 small text-muted">
              <p>Empowering special needs communities through creativity</p>
              <div>
                <Link to="/help" className="me-2 text-decoration-none">Help</Link>
                •
                <Link to="/privacy" className="mx-2 text-decoration-none">Privacy</Link>
                •
                <Link to="/terms" className="ms-2 text-decoration-none">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
import { Music, Paintbrush, Users, Accessibility, User } from "lucide-react";
// import AuthCard from "@/components/AuthCard";
// import FeatureCard from "@/components/FeatureCard";
// import creativeImage from "@/assets/creative-community.jpg";

const Login2 = () => {
  const [email, setEmail] = useState("");
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
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "test@example.com" && password === "password123") {
            resolve();
          } else {
            reject(new Error("Invalid email or password"));
          }
        }, 1200);
      });

      localStorage.setItem("user", JSON.stringify({ email }));

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-6 lg:p-12 bg-warm-beige/30 lg:flex-1">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center lg:text-left">
              EchoBridge
            </h1>
            <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0"></div>
            <p className="text-lg text-warm-gray mb-8 italic text-center lg:text-left">
              "Every voice matters, every story counts"
            </p>
            <div className="border-2 border-dashed border-border rounded-lg p-6 lg:p-8 mb-6 lg:mb-8 bg-card/50">
              <img
                // src={creativeImage}
                alt="Diverse community engaged in creative activities"
                className="w-full h-48 lg:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="hidden lg:block space-y-3">
              {/* <FeatureCard icon={Music} title="Interactive Music Studio" />
              <FeatureCard icon={Paintbrush} title="Creative Expression Tools" />
              <FeatureCard icon={Users} title="Supportive Community" />
              <FeatureCard icon={Accessibility} title="Adaptive Accessibility" /> */}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 lg:p-12 lg:flex-1">
          <div className="w-full max-w-md">
            {/* <AuthCard> */}
            <div>
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Welcome Back
                </h2>
                <p className="text-warm-gray">Continue your creative journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-foreground">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-input border-border"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>

              <div className="my-6">
                <div className="relative">
                  <separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-warm-gray">
                    or
                  </span>
                </div>
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                <Link
                  to="/signup"
                  className="text-primary hover:underline font-medium"
                >
                  Create New Account
                </Link>
              </div>
              </div>
            {/* </AuthCard> */}

            <div className="text-center mt-8 text-sm text-warm-gray">
              <p>Empowering special needs communities through creativity</p>
              <div className="flex justify-center gap-4 mt-4">
                <Link to="/help" className="hover:text-primary">
                  Help
                </Link>
                <span>•</span>
                <Link to="/privacy" className="hover:text-primary">
                  Privacy
                </Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-primary">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;

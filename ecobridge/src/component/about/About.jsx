import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dominique Bullard",
      email: "alex.chen@ecobridge.org",
      phone: "+1 (555) 123-4567",
      linkedin: "https://linkedin.com/in/alexchen",
      portfolio: "https://alexchen.dev",
    },
    {
      name: "Mya Walker",
      email: "myawalkerinfo@gmail.com",
      phone: "+1 (346) 305-8156",
      linkedin: "https://www.linkedin.com/in/mya-walker/",
      portfolio: "https://infomyaw.wixsite.com/myaw-portfolio",
    },
    {
      name: "Athena Jacob",
      email: "jordan.kim@ecobridge.org",
      phone: "+1 (555) 345-6789",
      linkedin: "https://linkedin.com/in/jordankim",
      portfolio: "https://jordankim.tech",
    },
    {
      name: "Tokunbo Lawal",
      email: "tokunbolawal4@gmail.com",
      phone: "+1 (404) 203-8915",
      linkedin: "https://www.linkedin.com/in/toks-lawal/",
      portfolio: "http://tokslaw.com/",
    },
  ];

  return (
    <div className="bg-light text-dark">

      {/* Hero Section */}
      <section id="about" className="py-5 text-center">
        <div className="container">
          <div className="border border-2 border-dashed rounded-3 d-inline-block px-5 py-3 mb-4,"style={{ backgroundColor: "#FFC857" }}>
            <h1 className="fw-bold display-5">EcoBridge</h1>
          </div>
          <p className="lead fw-bold mx-auto" style={{ maxWidth: "700px", color: "#255F85" }}>
            EcoBridge empowers individuals with special needs through music,
            art, and storytelling while advocating for inclusivity.
          </p>
        </div>
      </section>

      <div className="container py-5">
        {/* Product Conceptualization */}
        <section id="process" className="mb-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">How did we conceptualize our product?</h2>
            <p className="text-black mx-auto" style={{ maxWidth: "600px" }}>
              We merged creativity and advocacy to empower individuals with
              special needs, offering music, art, and storytelling tools that
              inspire self-expression and connection.
            </p>
          </div>
          <div className="card shadow-sm border border-dashed p-4">
            <h3 className="text-center fw-semibold mb-3">
              Guided by Community Voices
            </h3>
            <p className="text-muted text-center mb-4">
              Guided by the experiences of families, we built a sensory-friendly,
              accessibility-first platform that adapts to diverse needs. Every
              feature reflects our belief that creativity is a universal
              language—and every family deserves the tools to help their loved
              ones speak it.
            </p>
            <div className="row text-center g-4">
              <div className="col-md">
                <div
                  className="rounded-circle border border-2 bg-light d-flex justify-content-center align-items-center mx-auto"
                  style={{ width: "50px", height: "50px" }}
                >
                  🎵
                </div>
                <h6 className="fw-semibold mt-2">Music Tools</h6>
                <p className="small text-muted">
                  Adaptive instruments and composition tools for diverse
                  abilities
                </p>
              </div>
              <div className="col-md">
                <div
                  className="rounded-circle border border-2 bg-light d-flex justify-content-center align-items-center mx-auto"
                  style={{ width: "50px", height: "50px" }}
                >
                  🎨
                </div>
                <h6 className="fw-semibold mt-2">Art Creation</h6>
                <p className="small text-muted">
                  Digital canvases with sensory-friendly interfaces
                </p>
              </div>
              <div className="col-md">
                <div
                  className="rounded-circle border border-2 bg-light d-flex justify-content-center align-items-center mx-auto"
                  style={{ width: "50px", height: "50px" }}
                >
                  📖
                </div>
                <h6 className="fw-semibold mt-2">Storytelling</h6>
                <p className="small text-muted">
                  Interactive narrative tools for multiple communication styles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="mb-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">What problem does it seek to solve?</h2>
            <p className="mx-auto" style={{ maxWidth: "600px", color:"black" }}>
              Understanding the core challenges that individuals with special
              needs face in accessing creative expression and inclusive
              opportunities.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 bg-danger bg-opacity-10 border border-danger rounded ">
                <h4 className="fw-semibold text-black">The Challenge</h4>
                <p className="text-black">
                  Individuals with special needs often face barriers to creative
                  expression and social inclusion, with limited access to
                  adaptive tools. Traditional platforms lack the accessibility
                  features needed for meaningful participation.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 border border-primary rounded" style={{ backgroundColor: "#E9724C" }}>
                <h4 className="fw-semibold text-black">Our Solution</h4>
                <p className="text-black">
                  We're building an inclusive platform that provides accessible
                  tools for music creation, digital art, and interactive
                  storytelling, designed to empower individuals with special
                  needs and promote inclusivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Meet the Team</h2>
            <p className="text-black mx-auto" style={{ maxWidth: "600px" }}>
              The passionate advocates behind our mission, each bringing unique
              expertise in accessibility, creativity, and empowerment.
            </p>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-semibold">{member.name}</h5>
                    <div className="mt-3">
                      <p className="mb-2 small">
                        <Mail size={16} className="me-2 text-muted" />
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </p>
                      <p className="mb-2 small">
                        <Phone size={16} className="me-2 text-muted" />
                        <a href={`tel:${member.phone}`}>{member.phone}</a>
                      </p>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-dark"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-dark"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

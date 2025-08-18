import { Mail, Phone, Linkedin, ExternalLink, Menu } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Header */}
      <nav className="border-b bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg">EcoBridge</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Login</button>
          </div>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block border-2 border-dashed rounded-2xl px-8 py-4">
            <h1 className="text-4xl font-bold">EcoBridge</h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            EcoBridge empowers individuals with special needs through music, art, and storytelling while advocating for inclusivity.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
        {/* Product Conceptualization */}
        <section id="process" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">How did we conceptualize our product?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We merged creativity and advocacy to empower individuals with special needs, offering music, art, and storytelling tools that inspire self-expression and connection.
            </p>
          </div>
          <div className="bg-white border border-dashed p-8 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Guided by Community Voices</h3>
            </div>
            <p className="text-gray-600 text-center mb-8">
              Guided by the experiences of families, we built a sensory-friendly, accessibility-first platform that adapts to diverse needs. Every feature reflects our belief that creativity is a universal language—and every family deserves the tools to help their loved ones speak it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center bg-blue-50 mx-auto">
                  🎵
                </div>
                <h4 className="font-semibold text-sm">Music Tools</h4>
                <p className="text-xs text-gray-600">Adaptive instruments and composition tools for diverse abilities</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center bg-blue-50 mx-auto">
                  🎨
                </div>
                <h4 className="font-semibold text-sm">Art Creation</h4>
                <p className="text-xs text-gray-600">Digital canvases with sensory-friendly interfaces</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center bg-blue-50 mx-auto">
                  📖
                </div>
                <h4 className="font-semibold text-sm">Storytelling</h4>
                <p className="text-xs text-gray-600">Interactive narrative tools for multiple communication styles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">What problem does it seek to solve?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the core challenges that individuals with special needs face in accessing creative expression and inclusive opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <h3 className="text-red-900 font-semibold mb-4">The Challenge</h3>
              <p className="text-gray-600">
                Individuals with special needs often face barriers to creative expression and social inclusion, with limited access to adaptive tools. Traditional platforms lack the accessibility features needed for meaningful participation.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg">
              <h3 className="text-blue-600 font-semibold mb-4">Our Solution</h3>
              <p className="text-gray-600">
                We're building an inclusive platform that provides accessible tools for music creation, digital art, and interactive storytelling, designed to empower individuals with special needs and promote inclusivity.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate advocates behind our mission, each bringing unique expertise in accessibility, creativity, and empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600">
                      {member.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-2 py-1 rounded hover:bg-gray-100"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-2 py-1 rounded hover:bg-gray-100"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

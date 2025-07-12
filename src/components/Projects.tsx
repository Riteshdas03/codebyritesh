
import { ExternalLink, Github, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "MediReach",
      subtitle: "Healthcare Accessibility Platform",
      description: "A real-world healthcare accessibility platform to help users locate free/affordable hospitals, blood banks, and emergency aid with real-time data.",
      features: [
        "Map-based search (Leaflet.js)",
        "Multilingual UI",
        "Mobile-first design",
        "Real-time data integration"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
      status: "Work in Progress",
      statusColor: "bg-orange-100 text-orange-600",
      icon: "🩺",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "API Testing with Postman",
      subtitle: "Automated API Testing Suite",
      description: "Created and validated APIs with token authentication and automated tests for various endpoints.",
      features: [
        "Token-based authentication",
        "Automated test scripts",
        "Environment configuration",
        "Collection management"
      ],
      techStack: ["Postman", "JavaScript", "API Testing"],
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      icon: "📮",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Google Cloud Projects",
      subtitle: "Cloud Infrastructure & ML",
      description: "Completed 100+ labs including IAM, ML, Kubernetes, and Compute Engine implementations.",
      features: [
        "Identity & Access Management",
        "Machine Learning pipelines",
        "Kubernetes orchestration",
        "Compute Engine deployment"
      ],
      techStack: ["Google Cloud", "Kubernetes", "Python", "TensorFlow"],
      status: "Ongoing",
      statusColor: "bg-blue-100 text-blue-600",
      icon: "☁️",
      color: "from-blue-600 to-purple-600"
    }
  ];

  const contributions = [
    {
      title: "GirlScript Summer of Code 2024",
      description: "Contributed to open-source repositories with documentation improvements, issue resolution, and pull requests.",
      contributions: ["Documentation", "Bug fixes", "Feature implementations"],
      icon: "👩‍💻"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world projects showcasing my skills in web development, cloud technologies, and problem-solving.
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} bg-white/20 text-white`}>
                    {project.status === "Work in Progress" && <Clock className="w-3 h-3 inline mr-1" />}
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90">{project.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.status === "Work in Progress" ? (
                    <Button variant="outline" disabled className="flex-1">
                      <Clock className="w-4 h-4 mr-2" />
                      In Development
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Open Source Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {contributions.map((contrib, index) => (
              <div key={contrib.title} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{contrib.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{contrib.title}</h4>
                    <p className="text-gray-600 mb-4">{contrib.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {contrib.contributions.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

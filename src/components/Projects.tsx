import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "MediReach – Lifeline Reach Out",
      subtitle: "Essential Medical Services Platform",
      description:
        "A platform that connects users to essential medical services efficiently and quickly.",
      status: "Completed",
      features: [
        "Quick medical service access",
        "Efficient service connections",
        "User-friendly interface",
        "Responsive design"
      ],
      techStack: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Riteshdas03/lifeline-reach-out",
      liveUrl: "https://medireachlifeline.netlify.app/"
    },
    {
      title: "API Testing with Postman",
      subtitle: "Automated API Testing Suite",
      description:
        "Created and validated APIs with token authentication and automated tests for various endpoints.",
      status: "Completed",
      features: [
        "Token-based authentication",
        "Automated test scripts",
        "Environment configuration",
        "Collection management"
      ],
      techStack: ["Postman", "JavaScript", "API Testing"]
    },
    {
      title: "Google Cloud Projects",
      subtitle: "Cloud Infrastructure & ML",
      description:
        "Completed 100+ labs including IAM, ML, Kubernetes, and Compute Engine implementations.",
      status: "Ongoing",
      features: [
        "Identity & Access Management",
        "Machine Learning pipelines",
        "Kubernetes orchestration",
        "Compute Engine deployment"
      ],
      techStack: ["Google Cloud", "Kubernetes"]
    }
  ];

  const getStatusBadgeStyle = (status: string) => {
    return status === "Completed"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-yellow-100 text-yellow-700 border-yellow-200";
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, cloud technologies, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadgeStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-card-foreground mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-card-foreground mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="px-6 pb-6">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
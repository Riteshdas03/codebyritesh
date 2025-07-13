
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
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Featured Projects</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects showcasing my skills in web development, cloud technologies, and problem-solving
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-fadeInUp hover-lift bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20"
              style={{ animationDelay: `${index * 250}ms` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${project.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      {project.status === "Work in Progress" && <Clock className="w-4 h-4 mr-2" />}
                      <span className="text-sm font-bold">{project.status}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/90 text-lg">{project.subtitle}</p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                
                {/* Features */}
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-center text-muted-foreground group/feature"
                        style={{animationDelay: `${(index * 250) + (i * 100)}ms`}}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-4 group-hover/feature:scale-150 transition-transform duration-300"></div>
                        <span className="font-medium group-hover/feature:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-lg">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors duration-300"
                        style={{animationDelay: `${(index * 250) + (techIndex * 50)}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  {project.status === "Work in Progress" ? (
                    <Button 
                      variant="outline" 
                      disabled 
                      className="flex-1 h-12 text-lg font-semibold border-2 border-muted"
                    >
                      <Clock className="w-5 h-5 mr-3" />
                      In Development
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        className="flex-1 h-12 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Github className="w-5 h-5 mr-3" />
                        Code
                      </Button>
                      <Button 
                        className="flex-1 h-12 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                      >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Demo
                      </Button>
                    </>
                  )}
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-3xl animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Open Source Contributions</h3>
            <div className="grid grid-cols-1 gap-8">
              {contributions.map((contrib, index) => (
                <div 
                  key={contrib.title} 
                  className="group glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover-lift"
                  style={{animationDelay: `${index * 300}ms`}}
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {contrib.icon}
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                          {contrib.title}
                        </h4>
                        <p className="text-muted-foreground text-lg leading-relaxed">{contrib.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {contrib.contributions.map((item, itemIndex) => (
                          <span
                            key={item}
                            className="px-6 py-3 bg-green-50 border border-green-200 text-green-700 rounded-full text-base font-semibold hover:bg-green-100 transition-colors duration-300"
                            style={{animationDelay: `${(index * 300) + (itemIndex * 100)}ms`}}
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
      </div>
    </section>
  );
};

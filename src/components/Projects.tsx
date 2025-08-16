import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 border border-emerald-500/30"
      : "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30";
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particles-bg opacity-30"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold font-display gradient-text mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-shadow-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            A collection of projects showcasing my skills in web development, cloud technologies, and problem-solving
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="glass-card rounded-3xl neon-glow-hover overflow-hidden border border-primary/20 h-full">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Card Header */}
                <div className="relative z-10 p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <motion.h3 
                      className="text-xl font-bold font-display text-foreground group-hover:gradient-text transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(
                        project.status
                      )}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.status}
                    </motion.span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative z-10 px-6 pb-4">
                  <h4 className="text-sm font-semibold font-display text-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-cyan rounded-full mr-3 flex-shrink-0"
                          whileHover={{ scale: 2 }}
                          transition={{ duration: 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="relative z-10 px-6 pb-4">
                  <h4 className="text-sm font-semibold font-display text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 glass-morphism border border-primary/20 text-foreground rounded-full text-xs font-medium hover-glow"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="relative z-10 px-6 pb-6">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full glass-morphism border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-primary to-cyan hover:from-primary/80 hover:to-cyan/80 hover:shadow-glow transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
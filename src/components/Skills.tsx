
import { Code, Cloud, Database, Settings } from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python (Basic)", "C (Learning)", "JavaScript"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      icon: <Settings className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "Angular"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Google Cloud", "AWS (Learning)", "Azure (Certified)"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Tools & Others",
      icon: <Database className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Linux", "Neo4j"],
      color: "from-green-500 to-green-600"
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "Ritesh_das03",
      url: "https://leetcode.com/u/Ritesh_das03/",
      color: "bg-orange-500"
    },
    {
      platform: "GeeksforGeeks",
      username: "riteshdyjqr", 
      url: "https://www.geeksforgeeks.org/user/riteshdyjqr/",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="skills" className="section-min-height section-spacing relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-15"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 lg:w-48 lg:h-48 bg-primary/4 lg:bg-primary/8 rounded-full blur-lg lg:blur-xl"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 lg:w-56 lg:h-56 bg-accent/4 lg:bg-accent/8 rounded-full blur-lg lg:blur-xl"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
            Skills & Expertise
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
            Transforming ideas into reality with cutting-edge technologies and creative solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="relative glass-card p-6 sm:p-8 rounded-3xl neon-glow-hover overflow-hidden border border-primary/20">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan/10 to-accent/10 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`bg-gradient-to-r ${category.color} text-white p-3 sm:p-4 rounded-2xl inline-block mb-4 sm:mb-6 shadow-neon`}
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold font-display text-foreground mb-4 sm:mb-6 group-hover:gradient-text transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 sm:mr-4"
                          whileHover={{ scale: 2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="text-sm sm:text-base text-muted-foreground font-medium group-hover/skill:text-foreground group-hover/skill:gradient-text transition-all duration-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Concepts */}
        <div 
          className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 lg:p-12 rounded-3xl mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 gradient-text">Core Concepts</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              {["Data Structures", "REST APIs", "Graph Databases", "ML Basics"].map((concept, index) => (
                <div
                  key={concept}
                  className="group relative"
                  data-aos="zoom-in"
                  data-aos-delay={700 + (index * 50)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative bg-background/90 backdrop-blur-sm border border-primary/20 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-lg font-semibold text-foreground hover:shadow-xl transition-all duration-300 hover:scale-105 block text-sm sm:text-base">
                    {concept}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 gradient-text">Coding Profiles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {codingProfiles.map((profile, index) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/40 hover-lift"
                data-aos="flip-up"
                data-aos-delay={900 + (index * 100)}
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${profile.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {profile.platform.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur group-hover:blur-md transition-all duration-300"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:gradient-text transition-all duration-300">{profile.platform}</h4>
                <p className="text-sm sm:text-base text-muted-foreground font-medium break-all">{profile.username}</p>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

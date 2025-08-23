
import { Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Leadership = () => {
  const leadershipRoles = [
    {
      title: "Google Cloud DevFest 2024",
      role: "Content Team Lead",
      description: "Managed technical sessions and speaker coordination for the annual developer conference.",
      responsibilities: [
        "Technical session management",
        "Speaker coordination",
        "Content strategy planning",
        "Team leadership"
      ],
      icon: "☁️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "GCP Arcade Facilitator Program",
      role: "Facilitator & Mentor",
      description: "Completed 100+ GCP labs and mentored fellow learners in cloud technologies.",
      responsibilities: [
        "Completed 100+ GCP labs",
        "Mentored fellow learners",
        "Cloud technology guidance",
        "Technical skill development"
      ],
      icon: "🎮",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="leadership" className="section-min-height section-spacing relative overflow-hidden">
      {/* Mobile-optimized Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 sm:top-20 sm:left-20 sm:w-48 sm:h-48 lg:w-80 lg:h-80 bg-primary/3 sm:bg-primary/4 lg:bg-primary/8 rounded-full blur-lg lg:blur-2xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 sm:bottom-20 sm:right-20 sm:w-56 sm:h-56 lg:w-96 lg:h-96 bg-accent/3 sm:bg-accent/4 lg:bg-accent/8 rounded-full blur-lg lg:blur-2xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-screen flex flex-col justify-center py-8 sm:py-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display gradient-text mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Leadership & Volunteering
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
            Leading technical initiatives and mentoring fellow developers in the community
          </motion.p>
        </motion.div>

        {/* Leadership Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="glass-card rounded-3xl neon-glow-hover overflow-hidden border border-primary/20 h-full">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Header */}
                <div className={`relative z-10 bg-gradient-to-br ${role.color} p-6 lg:p-8 text-white`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 lg:mb-6">
                      <motion.span 
                        className="text-3xl lg:text-4xl mr-4 lg:mr-6 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {role.icon}
                      </motion.span>
                      <div className="min-w-0 flex-1">
                        <motion.h3 
                          className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 leading-tight"
                          whileHover={{ scale: 1.02 }}
                        >
                          {role.title}
                        </motion.h3>
                        <p className="text-white/90 text-sm lg:text-base font-medium">{role.role}</p>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-lg"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8 space-y-6 lg:space-y-8">
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{role.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-foreground mb-4 lg:mb-6 flex items-center text-base lg:text-lg">
                      <Award className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-primary flex-shrink-0" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3 lg:space-y-4">
                      {role.responsibilities.map((responsibility, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center text-muted-foreground group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 lg:mr-4 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"
                            whileHover={{ scale: 2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="font-medium group-hover/item:text-foreground transition-colors duration-300 text-sm lg:text-base">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div 
          className="glass-card p-6 lg:p-12 rounded-3xl neon-glow-hover border border-primary/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 flex flex-col lg:flex-row items-center justify-center gradient-text gap-2 lg:gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Users className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            Community Impact
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { number: "100+", label: "GCP Labs Completed", color: "from-blue-500 to-blue-600" },
              { number: "50+", label: "Developers Mentored", color: "from-purple-500 to-purple-600" },
              { number: "2", label: "Leadership Roles", color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="group text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-muted-foreground font-medium text-sm lg:text-base group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

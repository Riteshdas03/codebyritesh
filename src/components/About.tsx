
import { motion } from "framer-motion";

export const About = () => {
  const softSkills = [
    "Leadership",
    "Technical Writing", 
    "Team Collaboration",
    "Time Management"
  ];

  return (
    <section id="about" className="section-min-height section-spacing relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-2xl"
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-2xl"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
            About Me
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
            Crafting digital experiences with passion, precision, and purpose
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold font-display text-foreground leading-tight">
                  Designing Solutions, 
                  <span className="gradient-text block">Not Just Visuals</span>
                </h3>
                <motion.div 
                  className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              
              <motion.div 
                className="space-y-6 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground">
                  I'm <span className="font-semibold text-foreground">Ritesh Das</span>, a passionate Software Engineer in the making, currently pursuing B.Tech in Computer Science. I have a strong interest in cloud architecture, scalable systems, and frontend development.
                </p>
                <p className="text-muted-foreground">
                  I enjoy solving real-world problems, contributing to open source, and building impactful projects like 
                  <span className="gradient-text font-semibold"> MediReach</span>, a healthcare accessibility platform in development.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold font-display text-foreground">Key Strengths</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Cloud Architecture", color: "from-blue-500 to-cyan" },
                    { label: "Frontend Development", color: "from-purple-500 to-pink" },
                    { label: "Problem Solving", color: "from-orange-500 to-accent" },
                    { label: "Open Source", color: "from-green-500 to-primary" }
                  ].map((strength, index) => (
                    <motion.div 
                      key={strength.label}
                      className="group glass-card p-4 rounded-2xl hover-lift neon-glow-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`w-3 h-3 bg-gradient-to-r ${strength.color} rounded-full shadow-lg`}
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="font-medium text-foreground">{strength.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Soft Skills Card */}
              <motion.div 
                className="glass-card p-8 rounded-3xl neon-glow-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h4 className="text-2xl font-bold font-display text-foreground mb-8 text-center gradient-text">Soft Skills</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="group glass-morphism p-6 rounded-2xl text-center border border-primary/20 hover-glow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3"
                        whileHover={{ scale: 2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="font-semibold text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Current Project Card */}
              <motion.div 
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-cyan to-accent p-8 text-white shadow-neon"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "var(--shadow-neon)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan/20 to-accent/20"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center space-x-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h4 className="text-xl font-bold font-display">Currently Working On</h4>
                  </motion.div>
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.span 
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        🩺
                      </motion.span>
                      <div>
                        <h5 className="font-bold font-display text-lg mb-2">MediReach</h5>
                        <p className="text-white/90 leading-relaxed">
                          Healthcare accessibility platform to help users locate free/affordable 
                          hospitals, blood banks, and emergency aid with real-time data.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

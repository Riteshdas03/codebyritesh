
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Gandhi Engineering College, Bhubaneswar",
      period: "2023 - 2027",
      status: "In Progress",
      icon: "🎓"
    },
    {
      degree: "+2 Science with Computer Science",
      institution: "Swami Vivekanand Memorial HSS",
      period: "2021 - 2023",
      status: "Completed",
      icon: "🧪"
    },
    {
      degree: "10th Grade",
      institution: "Kalarabanka High School, Cuttack",
      period: "2019 - 2021",
      status: "GPA: 77.83%",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="section-min-height section-spacing relative overflow-hidden flex items-center">
      {/* Mobile-optimized Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-48 h-48 lg:w-80 lg:h-80 bg-primary/4 lg:bg-primary/8 rounded-full blur-lg lg:blur-2xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-56 h-56 lg:w-96 lg:h-96 bg-accent/4 lg:bg-accent/8 rounded-full blur-lg lg:blur-2xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            Education
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
            Academic journey shaping my technical foundation and professional growth
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-cyan rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-0 gap-6`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 lg:px-8 w-full lg:w-auto">
                  <motion.div
                    className={`glass-card p-6 lg:p-8 rounded-3xl neon-glow-hover border border-primary/20 ${
                      index % 2 === 0 ? "lg:text-right lg:ml-auto" : "lg:text-left lg:mr-auto"
                    }`}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-4xl lg:text-5xl mb-4 lg:mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-xl lg:text-2xl font-bold font-display text-foreground mb-3 gradient-text"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.degree}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4 lg:mb-6 leading-relaxed text-base lg:text-lg">
                      {item.institution}
                    </p>
                    <div className={`flex items-center ${index % 2 === 0 ? "lg:justify-between lg:flex-row-reverse" : "lg:justify-between"} flex-col lg:flex-row gap-3 lg:gap-4`}>
                      <span className="text-sm lg:text-base text-muted-foreground font-medium">{item.period}</span>
                      <motion.span
                        className={`text-sm lg:text-base px-4 py-2 rounded-full font-medium ${
                          item.status === "In Progress" 
                            ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                            : item.status === "Completed"
                            ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.status}
                      </motion.span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div 
                  className="relative flex items-center justify-center order-first lg:order-none"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-primary to-accent rounded-full z-10 shadow-lg border-4 border-background"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                    style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }}
                  />
                </motion.div>

                <div className="flex-1 lg:px-8 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

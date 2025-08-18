
import { motion } from "framer-motion";

export const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Arcade",
      subtitle: "Level 1, Level 2, Certification Zone",
      organization: "Google Cloud",
      icon: "☁️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Oracle Certified Foundations Associate",
      subtitle: "ERP & HCM",
      organization: "Oracle",
      icon: "🏛️",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      subtitle: "Microsoft Certified",
      organization: "Microsoft",
      icon: "☁️",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Angular Developer Certification",
      subtitle: "Infosys Springboard",
      organization: "Infosys",
      icon: "🅰️",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Neo4j Certified Professional",
      subtitle: "Graph Database",
      organization: "Neo4j",
      icon: "🗄️",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Postman API Fundamentals",
      subtitle: "Student Expert",
      organization: "Postman",
      icon: "📮",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "HP LIFE Certification",
      subtitle: "Data Science & Analytics",
      organization: "HP",
      icon: "📊",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="certifications" className="section-min-height section-spacing relative overflow-hidden flex items-center">
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
            Certifications
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
            Professional certifications validating expertise in cloud technologies and development
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <div className={`relative z-10 bg-gradient-to-br ${cert.color} p-6 text-white`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl lg:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-lg lg:text-xl font-bold mb-2 leading-tight"
                      whileHover={{ scale: 1.05 }}
                    >
                      {cert.title}
                    </motion.h3>
                    <p className="text-white/90 text-sm lg:text-base">{cert.subtitle}</p>
                  </div>
                  <motion.div 
                    className="absolute -bottom-3 -right-3 w-16 h-16 bg-white/10 rounded-full blur-lg"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground font-medium text-sm lg:text-base min-w-0 flex-1">{cert.organization}</span>
                    <motion.div 
                      className="flex items-center glass-morphism border border-emerald-500/30 px-3 py-1.5 rounded-full flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-emerald-400 rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs text-emerald-400 font-bold">Certified</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "7+", label: "Professional Certifications", color: "from-blue-500 to-blue-600" },
            { number: "100+", label: "GCP Labs Completed", color: "from-purple-500 to-purple-600" },
            { number: "3", label: "Cloud Platforms", color: "from-orange-500 to-orange-600" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="group glass-card p-6 lg:p-8 rounded-3xl neon-glow-hover border border-primary/20 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <motion.div 
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground font-medium text-sm lg:text-base group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              
              {/* Background decoration */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                whileHover={{ opacity: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

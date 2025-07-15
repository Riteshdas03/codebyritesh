
export const About = () => {
  const softSkills = [
    "Leadership",
    "Technical Writing", 
    "Team Collaboration",
    "Time Management"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital experiences with passion, precision, and purpose
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-delay="200">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Designing Solutions, 
                  <span className="gradient-text block">Not Just Visuals</span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I'm <span className="font-semibold text-foreground">Ritesh Das</span>, a passionate Software Engineer in the making, currently pursuing B.Tech in Computer Science. I have a strong interest in cloud architecture, scalable systems, and frontend development.
                </p>
                <p className="text-muted-foreground">
                  I enjoy solving real-world problems, contributing to open source, and building impactful projects like 
                  <span className="gradient-text font-semibold"> MediReach</span>, a healthcare accessibility platform in development.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground">Key Strengths</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Cloud Architecture", color: "bg-blue-500" },
                    { label: "Frontend Development", color: "bg-purple-500" },
                    { label: "Problem Solving", color: "bg-orange-500" },
                    { label: "Open Source", color: "bg-green-500" }
                  ].map((strength, index) => (
                    <div 
                      key={strength.label}
                      className="group flex items-center space-x-3 p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 hover-lift"
                      data-aos="fade-up"
                      data-aos-delay={300 + (index * 100)}
                    >
                      <div className={`w-3 h-3 ${strength.color} rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="font-medium text-foreground">{strength.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <div className="space-y-8">
              {/* Soft Skills Card */}
              <div className="glass-effect p-8 rounded-3xl shadow-lg hover-lift">
                <h4 className="text-2xl font-bold text-foreground mb-8 text-center">Soft Skills</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group bg-white/80 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 text-center border border-white/40"
                      data-aos="fade-left"
                      data-aos-delay={500 + (index * 100)}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="font-semibold text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Project Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-8 text-white shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-bold">Currently Working On</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">🩺</span>
                      <div>
                        <h5 className="font-bold text-lg mb-2">MediReach</h5>
                        <p className="text-white/90 leading-relaxed">
                          Healthcare accessibility platform to help users locate free/affordable 
                          hospitals, blood banks, and emergency aid with real-time data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

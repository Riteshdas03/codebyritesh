
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
    <section id="certifications" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Certifications</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies, development, and data analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group animate-fadeInUp hover-lift bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`bg-gradient-to-br ${cert.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-white/90 text-lg">{cert.subtitle}</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium text-lg">{cert.organization}</span>
                  <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm text-green-600 font-bold">Certified</span>
                  </div>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp">
          {[
            { number: "7+", label: "Professional Certifications", color: "from-blue-500 to-blue-600" },
            { number: "100+", label: "GCP Labs Completed", color: "from-purple-500 to-purple-600" },
            { number: "3", label: "Cloud Platforms", color: "from-orange-500 to-orange-600" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="group text-center glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-white/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
              
              {/* Background decoration */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

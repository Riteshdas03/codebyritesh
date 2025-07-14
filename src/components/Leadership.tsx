
import { Users, Award } from "lucide-react";

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
    <section id="leadership" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Leadership & Volunteering</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading technical initiatives and mentoring fellow developers in the community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {leadershipRoles.map((role, index) => (
            <div
              key={role.title}
              className="group animate-fadeInUp hover-lift bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${role.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl lg:text-5xl mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300">{role.icon}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">{role.title}</h3>
                      <p className="text-white/90 text-base sm:text-lg font-medium">{role.role}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{role.description}</p>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4 sm:mb-6 flex items-center text-lg sm:text-xl">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-primary flex-shrink-0" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {role.responsibilities.map((responsibility, i) => (
                      <li 
                        key={i} 
                        className="flex items-center text-muted-foreground group/item"
                        style={{animationDelay: `${(index * 300) + (i * 100)}ms`}}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 sm:mr-4 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="font-medium group-hover/item:text-foreground transition-colors duration-300 text-sm sm:text-base">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="glass-effect p-6 sm:p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-center gradient-text gap-2 sm:gap-3">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Community Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { number: "100+", label: "GCP Labs Completed", color: "from-blue-500 to-blue-600" },
              { number: "50+", label: "Developers Mentored", color: "from-purple-500 to-purple-600" },
              { number: "2", label: "Leadership Roles", color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group text-center"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium text-base sm:text-lg group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

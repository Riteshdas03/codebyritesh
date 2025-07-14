
import { Code, Cloud, Database, Settings } from "lucide-react";

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
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl floating" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into reality with cutting-edge technologies and creative solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group animate-fadeInUp hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-gradient-to-br from-white to-gray-50/80 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${category.color} text-white p-3 sm:p-4 rounded-2xl inline-block mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 group-hover:gradient-text transition-all duration-300">{category.title}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill} 
                        className="flex items-center group/skill"
                        style={{animationDelay: `${(index * 150) + (skillIndex * 50)}ms`}}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 sm:mr-4 group-hover/skill:scale-150 transition-transform duration-300"></div>
                        <span className="text-sm sm:text-base text-muted-foreground font-medium group-hover/skill:text-foreground transition-colors duration-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Concepts */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 lg:p-12 rounded-3xl mb-12 sm:mb-16 animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 gradient-text">Core Concepts</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              {["Data Structures", "REST APIs", "Graph Databases", "ML Basics"].map((concept, index) => (
                <div
                  key={concept}
                  className="group relative"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative bg-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-lg font-semibold text-foreground hover:shadow-xl transition-all duration-300 hover:scale-105 block text-sm sm:text-base">
                    {concept}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="text-center animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 gradient-text">Coding Profiles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {codingProfiles.map((profile, index) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/40 hover-lift"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${profile.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

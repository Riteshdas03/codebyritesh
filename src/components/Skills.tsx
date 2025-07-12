
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${category.color} text-white p-3 rounded-lg inline-block mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Concepts */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Data Structures", "REST APIs", "Graph Databases", "ML Basics"].map((concept) => (
              <span
                key={concept}
                className="bg-white px-6 py-3 rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {codingProfiles.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${profile.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {profile.platform.charAt(0)}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{profile.platform}</h4>
                <p className="text-gray-600">{profile.username}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

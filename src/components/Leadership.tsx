
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
    <section id="leadership" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Volunteering</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading technical initiatives and mentoring fellow developers in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {leadershipRoles.map((role, index) => (
            <div
              key={role.title}
              className="animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${role.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{role.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                    <p className="text-white/90">{role.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {role.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            Community Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">GCP Labs Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Developers Mentored</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <p className="text-gray-600">Leadership Roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

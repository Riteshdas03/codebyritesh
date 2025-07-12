
export const About = () => {
  const softSkills = [
    "Leadership",
    "Technical Writing", 
    "Team Collaboration",
    "Time Management"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Designing Solutions, Not Just Visuals
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm Ritesh Das, a passionate Software Engineer in the making, currently pursuing B.Tech in Computer Science. 
              I have a strong interest in cloud architecture, scalable systems, and frontend development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I enjoy solving real-world problems, contributing to open source, and building impactful projects like 
              <span className="text-blue-600 font-semibold"> MediReach</span>, a healthcare accessibility platform in development.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Key Strengths:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cloud Architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Frontend Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Problem Solving</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Open Source</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Soft Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
              <h4 className="text-lg font-semibold mb-2">Currently Working On</h4>
              <p className="text-blue-100">
                🩺 MediReach - Healthcare accessibility platform to help users locate free/affordable 
                hospitals, blood banks, and emergency aid with real-time data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

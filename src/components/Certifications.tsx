
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
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies, development, and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="animate-fade-in bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-white/90">{cert.subtitle}</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{cert.organization}</span>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600 font-medium">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
            <p className="text-gray-600">Professional Certifications</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
            <p className="text-gray-600">GCP Labs Completed</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
            <p className="text-gray-600">Cloud Platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

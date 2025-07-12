
import { GraduationCap } from "lucide-react";

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
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Education</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Mobile Timeline Layout */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Mobile timeline line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-16 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Mobile timeline dot */}
                  <div className="absolute left-4 top-4 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl sm:text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">{item.institution}</p>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
                      <span className="text-xs sm:text-sm text-gray-500">{item.period}</span>
                      <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full inline-block w-fit ${
                        item.status === "In Progress" 
                          ? "bg-blue-100 text-blue-600" 
                          : item.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Desktop timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="space-y-12 xl:space-y-16">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1 px-6 xl:px-8">
                    <div
                      className={`bg-white p-6 xl:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-3xl xl:text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl xl:text-2xl font-semibold text-gray-900 mb-3">
                        {item.degree}
                      </h3>
                      <p className="text-gray-600 mb-4 text-base xl:text-lg leading-relaxed">{item.institution}</p>
                      <div className={`flex items-center ${index % 2 === 0 ? "justify-between flex-row-reverse" : "justify-between"} gap-4`}>
                        <span className="text-sm xl:text-base text-gray-500">{item.period}</span>
                        <span className={`text-sm xl:text-base px-3 xl:px-4 py-1 xl:py-2 rounded-full ${
                          item.status === "In Progress" 
                            ? "bg-blue-100 text-blue-600" 
                            : item.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-orange-100 text-orange-600"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop timeline dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 xl:w-5 xl:h-5 bg-white border-4 xl:border-5 border-blue-600 rounded-full z-10 shadow-lg"></div>
                  </div>

                  <div className="flex-1 px-6 xl:px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

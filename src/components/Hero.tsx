
import { ArrowDown, Download, Mail, Rocket, Code, Cloud, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rotate-45 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Enhanced Content */}
        <div className="text-center lg:text-left animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 border border-green-200/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800">Open to opportunities</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
              <span className="text-lg text-blue-600 font-medium">Hello, I'm</span>
              <div className="flex gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse delay-100" />
                <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse delay-200" />
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 leading-tight">
              Ritesh Das
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <Code className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Software Engineer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <Cloud className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Cloud Enthusiast</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl">
              Passionate about building <span className="font-semibold text-blue-600">scalable, meaningful tech</span>. 
              Currently developing <span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MediReach</span> — 
              a real-world healthcare platform.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200/50 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-orange-800">Work in Progress</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0"
              size="lg"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Projects
            </Button>
            
            <Button
              variant="outline"
              asChild
              className="group border-2 border-blue-600/20 bg-white/80 backdrop-blur-sm text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              size="lg"
            >
              <a href="https://app.luminpdf.com/viewer/686613a093f47a455edc012e" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </a>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group border-2 border-gray-300/50 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white p-2 shadow-inner">
                <img 
                  src="https://i.postimg.cc/GhJdWVg7/image-1.jpg" 
                  alt="Ritesh Das"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 rounded-full animate-bounce shadow-xl">
              <Rocket size={28} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-full animate-bounce delay-500 shadow-xl text-2xl">
              ☁️
            </div>
            <div className="absolute top-8 -left-8 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full animate-pulse delay-1000 shadow-lg">
              <Code size={20} />
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin duration-[20s]">
              <div className="absolute top-4 left-1/2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            <div className="absolute inset-0 animate-spin duration-[15s] rotate-45">
              <div className="absolute top-8 left-1/2 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
        <div className="animate-bounce bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
          <ArrowDown className="text-gray-600" size={20} />
        </div>
      </div>
    </section>
  );
};

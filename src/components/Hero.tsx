
import { ArrowDown, Download, Mail, Rocket, Code, Cloud, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Mobile-optimized Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/20 to-cyan/20 lg:from-primary/40 lg:to-cyan/40 rounded-full blur-xl lg:blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-56 h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-accent/20 to-pink/20 lg:from-accent/40 lg:to-pink/40 rounded-full blur-xl lg:blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan/30 to-primary/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        {/* Simplified floating elements for mobile */}
        <motion.div 
          className="hidden lg:block absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ boxShadow: '0 0 10px hsl(var(--primary) / 0.3)' }}
        />
        <motion.div 
          className="hidden lg:block absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-pink to-cyan rotate-45"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ boxShadow: '0 0 15px hsl(var(--pink) / 0.4)' }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/5 w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full lg:bg-gradient-to-r lg:from-cyan lg:to-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ boxShadow: '0 0 8px hsl(var(--primary) / 0.4)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Enhanced Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Futuristic Status Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 glass-morphism border border-primary/30 rounded-full px-4 py-3 mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-medium text-primary font-mono">// Available for hire</span>
          </motion.div>

          <div className="mb-6 sm:mb-8">
            <motion.div 
              className="flex items-center gap-2 mb-3 justify-center lg:justify-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-lg text-primary font-medium font-mono">console.log("Hello, I'm")</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div key={i}>
                    <Star 
                      className="w-4 h-4 text-cyan fill-current" 
                      style={{ filter: 'drop-shadow(0 0 4px hsl(var(--cyan)))' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mb-4 leading-tight font-display text-shadow-glow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ritesh Das
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="glass-morphism rounded-full px-4 py-3 neon-glow-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground font-mono">Software Engineer</span>
                </div>
              </motion.div>
              <motion.div 
                className="glass-morphism rounded-full px-4 py-3 neon-glow-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground font-mono">Cloud Enthusiast</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Passionate about building <span className="gradient-text font-semibold">scalable, meaningful tech</span>. 
              Currently developing <span className="gradient-text font-bold">MediReach</span> — 
              a real-world healthcare platform.
            </motion.p>
            
            <motion.div 
              className="inline-flex items-center gap-2 glass-morphism border border-accent/30 rounded-full px-4 py-3 mb-8 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-medium text-accent font-mono">// status: building</span>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-primary to-cyan hover:from-primary/90 hover:to-cyan/90 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-semibold will-change-transform"
                size="lg"
              >
                <Rocket className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                View Projects
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                asChild
                className="group glass-morphism border border-primary/30 text-primary hover:bg-primary/10 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-semibold will-change-transform"
                size="lg"
              >
                <a href="https://app.luminpdf.com/viewer/686613a093f47a455edc012e" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  View Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group glass-morphism border border-accent/30 text-accent hover:bg-accent/10 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-semibold will-change-transform"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Futuristic Profile Image */}
        <motion.div 
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative group">
            {/* Mobile-optimized glow effect */}
            <motion.div 
              className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-primary via-accent to-cyan rounded-full blur-xl lg:blur-2xl opacity-20 lg:opacity-40"
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Mobile-optimized image container */}
            <motion.div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-accent to-pink p-1 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-full h-full rounded-full glass-morphism p-2">
                <img 
                  src="https://i.postimg.cc/GhJdWVg7/image-1.jpg" 
                  alt="Ritesh Das"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            
            {/* Simplified floating elements */}
            <motion.div 
              className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-gradient-to-r from-cyan to-primary text-primary-foreground p-2 lg:p-4 rounded-full shadow-lg"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ boxShadow: '0 0 15px hsl(var(--cyan) / 0.4)' }}
            >
              <Rocket size={16} className="lg:w-5 lg:h-5" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-gradient-to-r from-accent to-pink text-accent-foreground p-2 lg:p-4 rounded-full shadow-lg text-base lg:text-xl"
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              style={{ boxShadow: '0 0 15px hsl(var(--accent) / 0.4)' }}
            >
              ☁️
            </motion.div>
            <motion.div 
              className="hidden lg:block absolute top-8 -left-8 bg-gradient-to-r from-primary to-cyan text-primary-foreground p-3 rounded-full shadow-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              style={{ boxShadow: '0 0 12px hsl(var(--primary) / 0.4)' }}
            >
              <Code size={16} />
            </motion.div>
            
            {/* Simplified orbiting elements - desktop only */}
            <motion.div 
              className="hidden lg:block absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-4 left-1/2 w-2 h-2 bg-primary rounded-full" style={{ boxShadow: '0 0 8px hsl(var(--primary) / 0.5)' }}></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Interactive scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-50 pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => scrollToSection("about")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xs sm:text-sm text-muted-foreground font-medium font-mono group-hover:text-primary transition-colors duration-300">// scroll to explore</span>
        <motion.div 
          className="glass-morphism rounded-full p-2 sm:p-3 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 neon-glow-hover"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ y: 0 }}
        >
          <ArrowDown className="text-primary w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};


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
      {/* Futuristic Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/40 to-cyan/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/40 to-pink/40 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan/30 to-primary/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Floating neon geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full neon-glow"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-pink to-cyan rotate-45"
          animate={{ y: [10, -10, 10], rotate: [45, 225, 405] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ boxShadow: '0 0 20px hsl(var(--pink) / 0.5)' }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/5 w-3 h-3 bg-gradient-to-r from-cyan to-primary rounded-full"
          animate={{ y: [-5, 15, -5], scale: [1, 1.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ boxShadow: '0 0 15px hsl(var(--cyan) / 0.6)' }}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-primary to-cyan hover:from-primary/80 hover:to-cyan/80 text-primary-foreground px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan/25 hover:shadow-2xl border-0 text-base font-semibold neon-glow-hover"
                size="lg"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Projects
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                asChild
                className="group glass-morphism border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:shadow-xl text-base font-semibold"
                size="lg"
              >
                <a href="https://app.luminpdf.com/viewer/686613a093f47a455edc012e" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  View Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group glass-morphism border-2 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:shadow-xl text-base font-semibold"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
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
            {/* Neon outer glow effect */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-cyan rounded-full blur-2xl opacity-40"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Main futuristic image container */}
            <motion.div 
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-accent to-pink p-1 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full glass-morphism p-2">
                <img 
                  src="https://i.postimg.cc/GhJdWVg7/image-1.jpg" 
                  alt="Ritesh Das"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            
            {/* Futuristic floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan to-primary text-primary-foreground p-4 rounded-full shadow-xl"
              animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ boxShadow: '0 0 20px hsl(var(--cyan) / 0.6)' }}
            >
              <Rocket size={20} />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent to-pink text-accent-foreground p-4 rounded-full shadow-xl text-xl"
              animate={{ y: [5, -5, 5], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              style={{ boxShadow: '0 0 20px hsl(var(--accent) / 0.6)' }}
            >
              ☁️
            </motion.div>
            <motion.div 
              className="absolute top-8 -left-8 bg-gradient-to-r from-primary to-cyan text-primary-foreground p-3 rounded-full shadow-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              style={{ boxShadow: '0 0 15px hsl(var(--primary) / 0.5)' }}
            >
              <Code size={16} />
            </motion.div>
            
            {/* Orbiting neon elements */}
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-4 left-1/2 w-3 h-3 bg-gradient-to-r from-cyan to-primary rounded-full" style={{ boxShadow: '0 0 10px hsl(var(--cyan))' }}></div>
            </motion.div>
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-8 left-1/2 w-2 h-2 bg-gradient-to-r from-pink to-accent rounded-full" style={{ boxShadow: '0 0 8px hsl(var(--pink))' }}></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Futuristic scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-sm text-muted-foreground font-medium font-mono">// scroll to explore</span>
        <motion.div 
          className="glass-morphism rounded-full p-3 border border-primary/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

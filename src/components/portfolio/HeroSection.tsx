import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "./HeroSlideshow";

// Import profile image - replace with actual image path when available
// import profileImage from "@/assets/profile-image.png";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="blob absolute top-20 left-10 w-72 h-72 bg-[hsl(301,82%,80%)] opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="blob absolute top-40 right-20 w-96 h-96 bg-[hsl(349,88%,74%)] opacity-25"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="blob absolute bottom-20 left-1/3 w-80 h-80 bg-[hsl(349,64%,78%)] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <HeroSlideshow />
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background shapes */}
              <motion.div
                className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-[hsl(349,88%,74%)] to-[hsl(301,82%,80%)] opacity-60"
                animate={{
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[hsl(48,85%,50%)] opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main image container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
                {/* Profile Image */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face"
                  alt="Lucy Shai - Software Developer & AI Enthusiast"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay at bottom for text */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(335,73%,30%)/90] via-[hsl(335,73%,30%)/50] to-transparent pt-20 pb-6 px-6">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white drop-shadow-lg">
                    Lucy Shai
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base mt-1">
                    Software Developer | AI Enthusiast
                  </p>
                </div>

                {/* Decorative overlay elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[hsl(48,85%,50%)] opacity-80" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/95 shadow-lg backdrop-blur-sm"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[hsl(349,88%,55%)]" />
                  <span className="text-sm font-semibold text-[hsl(335,73%,40%)]">AI Developer</span>
                </div>
              </motion.div>

              {/* Social Links - positioned below image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/90 text-[hsl(335,73%,40%)] hover:bg-[hsl(349,88%,74%)] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/90 text-[hsl(335,73%,40%)] hover:bg-[hsl(349,88%,74%)] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <Button
                  size="sm"
                  variant="secondary"
                  className="shadow-lg"
                  asChild
                >
                  <a href="#contact">
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

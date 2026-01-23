import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "./HeroSlideshow";
import profileImage from "@/assets/profile-image.jpg";

export const HeroSection = () => {
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
          {/* Left Side - Profile Image with Overlay Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Profile Image Container */}
              <div className="relative w-full h-full max-w-sm mx-auto lg:mx-0">
                {/* Main profile image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                  <img 
                    src={profileImage}
                    alt="Lucy Shai - Software Developer & AI Enthusiast"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Text Card Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-6 text-center lg:text-left"
                >
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                    Aspiring AI &{" "}
                    <span className="bg-gradient-to-r from-[hsl(48,85%,70%)] to-[hsl(349,88%,74%)] bg-clip-text text-transparent">
                      Software Developer
                    </span>
                  </h1>
                  <p className="text-white/80 text-sm sm:text-base mb-3 font-medium">
                    Ethical & Applied AI Solutions
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Software Development graduate from Nelson Mandela University with experience in 
                    C#, SQL, software design, AI, and Python-based data analysis.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <Button
                      className="bg-white text-[hsl(335,73%,49%)] hover:bg-white/90 font-semibold"
                      asChild
                    >
                      <a href="#projects">
                        View Projects
                        <ArrowDown className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/50 text-white hover:bg-white/10 font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <HeroSlideshow />
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

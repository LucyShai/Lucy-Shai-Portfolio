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

      <div className="section-container relative z-10 pt-14 lg:pt-12">
        {/* Creative Name Header with Slide-in Animation */}
        <motion.div 
          className="text-left mb-6 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="flex items-center justify-start gap-3"
            >
              <motion.span 
                className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <motion.span 
                  className="inline-block text-white"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                  Lucy
                </motion.span>
                <motion.span 
                  className="inline-block text-white mx-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {" "}
                </motion.span>
                <motion.span 
                  className="inline-block bg-gradient-to-r from-[hsl(48,85%,70%)] via-[hsl(349,88%,74%)] to-[hsl(301,82%,80%)] bg-clip-text text-transparent"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  Shai
                </motion.span>
              </h2>
              <motion.span 
                className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Profile Image with Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[240px] sm:h-[280px] lg:h-[320px]">
              {/* Profile Image Container */}
              <div className="relative w-full h-full max-w-xs mx-auto lg:mx-0">
                {/* Main profile image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                  <img 
                    src={profileImage}
                    alt="Lucy Shai - Software Developer & AI Enthusiast"
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Gradient overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Text Card Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 text-center lg:text-left"
            >
              <h1 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                Aspiring AI &{" "}
                <span className="bg-gradient-to-r from-[hsl(48,85%,70%)] to-[hsl(349,88%,74%)] bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>
              <p className="text-white/80 text-sm mb-2 font-medium">
                Ethical & Applied AI Solutions
              </p>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                Software Development graduate from Nelson Mandela University with experience in 
                C#, SQL, software design, AI, and Python-based data analysis.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Button
                  size="sm"
                  className="bg-white text-[hsl(335,73%,49%)] hover:bg-white/90 font-semibold"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                    <ArrowDown className="w-3 h-3 ml-1" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-[hsl(48,85%,70%)] text-[hsl(335,50%,15%)] hover:bg-[hsl(48,85%,60%)] font-semibold shadow-lg"
                  asChild
                >
                  <a href="https://docs.google.com/document/d/1n0RR8ZP5yCMyc4Jx-Q6Bjbw4TkBIrMm3/edit?usp=sharing&ouid=115679582975354821590&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                    <Download className="w-3 h-3 mr-1" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <HeroSlideshow />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

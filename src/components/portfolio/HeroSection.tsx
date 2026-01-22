import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white mb-6"
            >
              <Sparkles className="w-4 h-4 text-[hsl(349,88%,74%)]" />
              <span className="text-sm font-medium">Open to opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Aspiring AI &{" "}
              <span className="relative">
                <span className="relative z-10 text-[hsl(349,88%,74%)]">Software Developer</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 -skew-x-3"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-4 font-medium"
            >
              Ethical & Applied AI Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-white/70 max-w-xl mb-8 leading-relaxed"
            >
              Software Development graduate from Nelson Mandela University with experience in 
              C#, SQL, software design, AI, and Python-based data analysis. Through the CAPACITI 
              AI Bootcamp, I built real-world AI applications, audited models for bias, and 
              delivered ethical, user-focused solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <Button
                size="xl"
                variant="hero"
                onClick={scrollToProjects}
                className="w-full sm:w-auto group"
              >
                View Projects
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="xl"
                variant="heroOutline"
                className="w-full sm:w-auto group"
                asChild
              >
                <a href="#contact">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-[hsl(349,88%,74%)] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-[hsl(349,88%,74%)] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
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
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl bg-gradient-to-br from-[hsl(301,35%,60%)] to-[hsl(349,45%,55%)]">
                {/* Placeholder with initials - replace with actual image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[hsl(48,85%,50%)] to-[hsl(349,88%,74%)] flex items-center justify-center shadow-xl border-4 border-white/40">
                    <span className="text-6xl sm:text-7xl font-display font-bold text-white drop-shadow-lg">
                      LS
                    </span>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white drop-shadow-lg">
                      Lucy Shai
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base mt-1">
                      Software Developer | AI Enthusiast
                    </p>
                  </div>
                </div>

                {/* Decorative overlay elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[hsl(48,85%,50%)] opacity-80" />
                <div className="absolute bottom-8 left-6 w-4 h-4 rounded-full bg-white/50" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-semibold text-[hsl(349,72%,40%)]">✨ AI Developer</span>
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

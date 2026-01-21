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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

        {/* Decorative rings */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 border border-white/5 rounded-full" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white mb-8"
          >
            <Sparkles className="w-4 h-4 text-[hsl(349,88%,74%)]" />
            <span className="text-sm font-medium">Open to opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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
            className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
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
            className="flex items-center justify-center gap-4"
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

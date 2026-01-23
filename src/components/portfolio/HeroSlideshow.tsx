import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Code2, Shield, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "about",
    label: "About",
    title: "Building AI Solutions with",
    highlight: "Purpose & Ethics",
    description: "Software Development graduate with a strong interest in AI and ethical technology. Completed the CAPACITI AI Bootcamp with hands-on experience in real-world AI projects.",
    icon: Brain,
    color: "from-[hsl(349,88%,74%)] to-[hsl(301,82%,80%)]",
  },
  {
    id: "skills",
    label: "Skills",
    title: "Technical",
    highlight: "Expertise",
    description: "Proficient in Python, Machine Learning, NLP, Prompt Engineering, and Bias Detection. Experienced with Jupyter, GitHub, Streamlit, and IBM AI Fairness 360.",
    icon: Code2,
    color: "from-[hsl(301,82%,80%)] to-[hsl(315,36%,66%)]",
  },
  {
    id: "projects",
    label: "Projects",
    title: "Featured",
    highlight: "Deliverables",
    description: "Built real-world AI applications including Bias Audit Reports, Sentiment Analysis Dashboards, and End-to-End AI Capstone projects.",
    icon: Shield,
    color: "from-[hsl(335,73%,49%)] to-[hsl(349,88%,74%)]",
  },
  {
    id: "ethics",
    label: "Ethics",
    title: "Responsible",
    highlight: "AI Commitment",
    description: "Committed to fairness, transparency, privacy, and social good. Every project emphasizes bias detection, ethical decision-making, and data privacy.",
    icon: Shield,
    color: "from-[hsl(349,64%,78%)] to-[hsl(313,24%,75%)]",
  },
  {
    id: "contact",
    label: "Contact",
    title: "Let's",
    highlight: "Connect",
    description: "Open to opportunities in AI development, software engineering, and ethical technology roles. Ready to collaborate on impactful projects.",
    icon: Heart,
    color: "from-[hsl(349,88%,74%)] to-[hsl(48,85%,50%)]",
  },
];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[280px] lg:h-[350px]">
      {/* Slideshow Card */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/40 overflow-hidden h-full flex flex-col justify-center">
        {/* Decorative gradient corner */}
        <div 
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${current.color} opacity-20 rounded-bl-full`}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(335,73%,49%)]">
                {current.label}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[hsl(335,73%,49%)/30] to-transparent" />
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[hsl(335,73%,30%)] mb-3 leading-tight">
              {current.title}{" "}
              <span className="text-[hsl(349,88%,55%)]">{current.highlight}</span>
            </h2>

            {/* Description */}
            <p className="text-[hsl(335,25%,35%)] text-sm md:text-base leading-relaxed mb-6">
              {current.description}
            </p>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection(current.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${current.color} hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <current.icon className="w-4 h-4" />
              View {current.label}
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-[hsl(349,88%,74%)/20] hover:bg-[hsl(349,88%,74%)/40] flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 text-[hsl(335,73%,40%)]" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-[hsl(349,88%,74%)/20] hover:bg-[hsl(349,88%,74%)/40] flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 text-[hsl(335,73%,40%)]" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              index === currentSlide
                ? "bg-white text-[hsl(335,73%,49%)] shadow-md"
                : "bg-white/30 text-white hover:bg-white/50"
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
};

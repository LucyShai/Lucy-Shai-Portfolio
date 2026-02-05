import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Laptop, Brain, Shield, Award, GraduationCap, ExternalLink } from "lucide-react";

const courseCategories = [
  {
    icon: Bot,
    title: "AI & ML Foundations",
    courses: ["AI For Everyone", "Introduction to AI", "AI Essentials", "AI on Microsoft Azure"],
  },
  {
    icon: Laptop,
    title: "Programming & Development",
    courses: ["Python for Data Science, AI & Development", "Building AI Chatbots Without Programming"],
  },
  {
    icon: Brain,
    title: "Generative AI & LLMs",
    courses: ["Introduction to Generative AI", "Generative AI with LLMs", "Prompt Engineering with ChatGPT"],
  },
  {
    icon: Shield,
    title: "Responsible AI & Ethics",
    courses: ["Introduction to Responsible AI", "Managing Bias, Ethics & Accountability"],
  },
];

const education = [
  { degree: "Diploma in IT", institution: "Nelson Mandela University", link: null },
  { degree: "Flowgear Certification", institution: "Flowgear", link: "https://certifications.flowgear.net/users/certificates/ZMO8-P5BM-DMQ9-JK5G/landing?noredir" },
  { degree: "Higher Certificate in IT", institution: "Nelson Mandela University", link: null },
  { degree: "National Senior Certificate", institution: "Ingqayizivele Secondary", link: null },
];

export const CertificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certification" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Combined Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
            Education & Certifications
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground italic">
            Academic <span className="text-secondary">Background</span>
          </h2>
        </motion.div>

        {/* Education Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-card rounded-lg p-3 border border-border hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-secondary flex-shrink-0" />
                <h4 className="font-semibold text-foreground text-xs">{edu.degree}</h4>
              </div>
              <p className="text-muted-foreground text-xs pl-6">{edu.institution}</p>
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 pl-6 text-xs text-secondary hover:text-secondary/80 transition-colors"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </motion.div>

        {/* Coursera Section */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Courses - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h3 className="text-base font-semibold text-foreground mb-4">
              Coursera AI Bootcamp <span className="text-muted-foreground font-normal text-sm">— Courses Completed</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {courseCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + categoryIndex * 0.05, duration: 0.4 }}
                  className="bg-muted/30 rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <category.icon className="w-4 h-4 text-secondary" />
                    <span className="font-medium text-foreground text-xs">{category.title}</span>
                  </div>
                  <ul className="space-y-0.5 pl-6">
                    {category.courses.map((course) => (
                      <li key={course} className="text-muted-foreground text-xs">
                        • {course}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <a 
              href="https://coursera.org/share/34e8493e8152ca96e461231a4b85c269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors"
            >
              View Coursera Certificate <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          {/* Badge - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-6 border-muted flex flex-col items-center justify-center text-center p-6 bg-card shadow-lg">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground mb-1">C A P A C I T I</span>
                <h4 className="font-display text-base md:text-lg font-bold text-foreground leading-tight mb-3">
                  Artificial<br />Intelligence (AI)<br />Bootcamp
                </h4>
                <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md">
                  <span className="text-[10px]">powered by</span>
                  <span className="font-bold ml-1 text-xs">Coursera</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-secondary-foreground" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Brain, Shield, Code } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const highlights = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Hands-on experience building AI applications",
  },
  {
    icon: Shield,
    title: "Ethical Tech",
    description: "Focus on bias detection and fairness",
  },
  {
    icon: Code,
    title: "Full Stack",
    description: "Software development fundamentals",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Creative problem-solving approach",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--muted-foreground) / 0.1) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              
              {/* Profile card */}
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/30">
                  <img 
                    src={profileImage}
                    alt="Lucy Shai"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-center mb-2">
                  Lucy Shai
                </h3>
                <p className="text-muted-foreground text-center text-sm mb-6">
                  Software Developer | AI Enthusiast
                </p>
                
                {/* Highlight cards */}
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                      className="p-3 rounded-xl bg-muted/50 text-center"
                    >
                      <item.icon className="w-5 h-5 mx-auto mb-1 text-secondary" />
                      <p className="text-xs font-medium text-foreground">{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building AI Solutions with{" "}
              <span className="text-secondary">Purpose & Ethics</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Lucy Shai, a Software Development graduate with a strong interest in AI 
                and ethical technology. I completed the CAPACITI AI Bootcamp, working on 
                hands-on AI projects including sentiment analysis systems, bias audits, and 
                end-to-end AI applications.
              </p>
              <p>
                With a foundation in software development and AI ethics, I build technically 
                robust and socially responsible solutions that improve fairness, access, and 
                decision-making. My experience spans from traditional software development 
                with C# and SQL to modern AI implementations using Python and machine learning.
              </p>
              <p>
                I'm passionate about creating technology that not only works efficiently but 
                also considers its impact on society. Through prompt engineering and 
                data-driven problem-solving, I thrive in agile teams and embrace continuous 
                learning.
              </p>
            </div>

            {/* Education badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">
                  Nelson Mandela University
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm font-medium text-foreground">
                  CAPACITI AI Bootcamp
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

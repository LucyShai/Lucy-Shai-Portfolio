import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Wrench,
  Users,
  Sparkles,
  Database,
  GitBranch,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  FileText,
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    color: "secondary",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Machine Learning", icon: Brain },
      { name: "NLP & Sentiment Analysis", icon: MessageSquare },
      { name: "Bias Detection", icon: Shield },
      { name: "Prompt Engineering", icon: Sparkles },
      { name: "API Integration", icon: Zap },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Jupyter Notebook", icon: FileText },
      { name: "Google Colab", icon: Code2 },
      { name: "GitHub", icon: GitBranch },
      { name: "Streamlit / Gradio", icon: BarChart3 },
      { name: "No-Code AI Tools", icon: Sparkles },
      { name: "IBM AI Fairness 360", icon: Shield },
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    color: "highlight",
    skills: [
      { name: "Ethical AI Reasoning", icon: Shield },
      { name: "Data Interpretation", icon: BarChart3 },
      { name: "Documentation", icon: FileText },
      { name: "Communication", icon: MessageSquare },
      { name: "Agile Teamwork", icon: Users },
      { name: "Problem Solving", icon: Brain },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI development, ethical technology practices, 
            and professional collaboration.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : category.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-highlight/10 text-highlight"
                  }`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: categoryIndex * 0.15 + skillIndex * 0.05 + 0.2,
                      duration: 0.3,
                    }}
                    className="skill-badge"
                  >
                    <skill.icon className="w-4 h-4" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional visual element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Continuously learning and expanding my skill set in emerging AI technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

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
  Server,
  Cloud,
  Globe,
  Lock,
  Layers,
  Layout,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code2,
    gradient: "from-[hsl(335,73%,49%)] to-[hsl(349,88%,74%)]",
    skills: [
      { name: "C#", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "ASP.NET Core MVC", icon: Layers },
      { name: "React", icon: Layout },
      { name: "HTML/CSS", icon: Globe },
      { name: "Bootstrap", icon: Layout },
      { name: "REST APIs", icon: Zap },
      { name: "OOP & MVC", icon: Layers },
    ],
  },
  {
    title: "Database & Data",
    icon: Database,
    gradient: "from-[hsl(301,82%,80%)] to-[hsl(315,36%,66%)]",
    skills: [
      { name: "SQL Server", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Database Design", icon: Layers },
      { name: "Stored Procedures", icon: FileText },
      { name: "Data Modeling", icon: BarChart3 },
      { name: "Data Manipulation", icon: BarChart3 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-[hsl(349,64%,78%)] to-[hsl(313,24%,75%)]",
    skills: [
      { name: "Azure Fundamentals", icon: Cloud },
      { name: "AWS Fundamentals", icon: Cloud },
      { name: "CI/CD Pipelines", icon: Zap },
      { name: "Git/GitHub", icon: GitBranch },
      { name: "Version Control", icon: GitBranch },
    ],
  },
  {
    title: "AI & Prompt Engineering",
    icon: Brain,
    gradient: "from-[hsl(335,73%,49%)] to-[hsl(301,82%,80%)]",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "NLP & Sentiment Analysis", icon: MessageSquare },
      { name: "Prompt Optimization", icon: Sparkles },
      { name: "LLM Applications", icon: Brain },
      { name: "AI Workflows", icon: Zap },
      { name: "Bias Detection", icon: Shield },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    gradient: "from-[hsl(301,82%,80%)] to-[hsl(349,64%,78%)]",
    skills: [
      { name: "Jupyter Notebook", icon: FileText },
      { name: "Google Colab", icon: Code2 },
      { name: "Streamlit / Gradio", icon: BarChart3 },
      { name: "No-Code AI Tools", icon: Sparkles },
      { name: "IBM AI Fairness 360", icon: Shield },
    ],
  },
  {
    title: "IT & Security",
    icon: Lock,
    gradient: "from-[hsl(349,64%,78%)] to-[hsl(335,73%,49%)]",
    skills: [
      { name: "Networking Basics", icon: Globe },
      { name: "Cybersecurity Principles", icon: Shield },
      { name: "Secure Coding", icon: Lock },
      { name: "Troubleshooting", icon: Wrench },
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    gradient: "from-[hsl(313,24%,75%)] to-[hsl(349,88%,74%)]",
    skills: [
      { name: "Problem Solving", icon: Brain },
      { name: "Analytical Thinking", icon: BarChart3 },
      { name: "Communication", icon: MessageSquare },
      { name: "Teamwork", icon: Users },
      { name: "Adaptability", icon: Sparkles },
      { name: "Works Under Pressure", icon: Zap },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-blush)" }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-orchid)" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            What I Do
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.05, duration: 0.4 }}
              className="group relative"
            >
              <div className="relative bg-card rounded-xl p-3 md:p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${category.gradient}`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-foreground leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List - Compact */}
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

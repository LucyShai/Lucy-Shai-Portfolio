import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, BarChart3, Layers, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bias Audit Report",
    icon: Shield,
    problem: "ML models can disadvantage certain groups (loan approvals).",
    solution: "Audited models, quantified bias, applied mitigation techniques.",
    technologies: ["Python", "Jupyter Notebook", "IBM AI Fairness 360", "Pandas", "Matplotlib"],
    outcome: "Identified bias patterns, reduced unfair outcomes, connected findings to ethical impact.",
    color: "secondary",
    featured: true,
    demoLink: "#",
    codeLink: "#",
    videoLink: null,
  },
  {
    title: "SentimentiQ Dashboard",
    icon: BarChart3,
    problem: "Difficult to analyze large text data for sentiment.",
    solution: "Interactive dashboard classifying text with confidence scores.",
    technologies: ["Python", "NLP APIs", "Streamlit", "Hugging Face"],
    outcome: "Multi-class classification, visual sentiment analysis.",
    color: "primary",
    featured: true,
    demoLink: "https://word-whisperer-dash.vercel.app/",
    codeLink: "#",
    videoLink: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/lebogang_molepo_capaciti_org_za/IQCeFBNN4FbLSo0nkC8yq30AAQVfvq4cVNSblpJW6rbbFd8?e=ja8L6L&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  },
  {
    title: "End-to-End AI Capstone",
    icon: Layers,
    problem: "Need for accessible AI tools integrating multiple technologies.",
    solution: "Scalable, user-friendly AI platform with ethical considerations.",
    technologies: ["AI APIs", "Frontend UI", "Backend Logic", "OpenAI"],
    outcome: "Integrated AI technologies, delivered working prototype.",
    color: "highlight",
    featured: true,
    demoLink: "#",
    codeLink: "#",
    videoLink: null,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects & <span className="text-secondary">Deliverables</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world AI applications built during the CAPACITI AI Bootcamp, 
            demonstrating practical skills and ethical considerations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover flex flex-col"
            >
              {/* Project Header */}
              <div
                className={`p-6 ${
                  project.color === "secondary"
                    ? "bg-gradient-to-br from-secondary/10 to-secondary/5"
                    : project.color === "primary"
                    ? "bg-gradient-to-br from-primary/10 to-primary/5"
                    : "bg-gradient-to-br from-highlight/10 to-highlight/5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      project.color === "secondary"
                        ? "bg-secondary text-secondary-foreground"
                        : project.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-highlight text-highlight-foreground"
                    }`}
                  >
                    <project.icon className="w-7 h-7" />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/30">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.videoLink && (
                    <Button variant="secondary" size="sm" className="flex-1" asChild>
                      <a href={project.videoLink} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4" />
                        Video
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live App
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

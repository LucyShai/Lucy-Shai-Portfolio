import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play, Shield, BarChart3, Layers, GraduationCap, Home, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Project images
import taluImage from "@/assets/projects/talu-career.jpg";
import archvisionImage from "@/assets/projects/archvision-home.jpg";
import resumeImage from "@/assets/projects/resume-builder.jpg";
import sentimentiqImage from "@/assets/projects/sentimentiq-dashboard.jpg";
import biasImage from "@/assets/projects/bias-audit.jpg";
import rsaImage from "@/assets/projects/rsa-sentinel.jpg";

const projects = [
  {
    title: "Talu Future Assistance",
    icon: GraduationCap,
    image: taluImage,
    problem: "TaLu gives learners personalized career guidance and matches them to suitable universities. Many students struggle to know which universities they qualify for. This often leads to late, incorrect, or missed applications.",
    solution: "Built an AI-powered platform that provides personalized career guidance and university matching.",
    technologies: ["AI APIs", "React", "Career Matching Algorithms"],
    outcome: "Personalized university recommendations based on student qualifications and career goals.",
    color: "secondary",
    featured: false,
    liveLink: "https://arena-berry-21220384.figma.site/",
  },
  {
    title: "ArchVision AI Home Builder",
    icon: Home,
    image: archvisionImage,
    problem: "ArchVision AI Home Builder is an AI-powered web app for designing and visualizing homes. It helps users create floor plans and 3D home visuals.",
    solution: "The app offers an interactive way to customize and plan home layouts with AI assistance.",
    technologies: ["AI APIs", "React", "3D Visualization", "Floor Plan Generation"],
    outcome: "Interactive home design tool with floor plan creation and 3D visualization capabilities.",
    color: "highlight",
    featured: false,
    liveLink: "https://archvision-roan.vercel.app/",
  },
  {
    title: "AI Resume Builder",
    icon: Briefcase,
    image: resumeImage,
    problem: "Creating ATS-friendly, industry-optimized resumes is challenging.",
    solution: "Developed intelligent resume generator with keyword optimization.",
    technologies: ["AI APIs", "Frontend UI", "PDF Generation"],
    outcome: "Multiple templates, ATS compatibility checking, job description matching.",
    color: "primary",
    featured: false,
    liveLink: "https://apt-aptitude.vercel.app/",
  },
  {
    title: "SentimentiQ Dashboard",
    icon: BarChart3,
    image: sentimentiqImage,
    problem: "Difficult to analyze large text data for sentiment.",
    solution: "Interactive dashboard classifying text with confidence scores.",
    technologies: ["Python", "NLP APIs", "Streamlit", "Hugging Face"],
    outcome: "Multi-class classification, visual sentiment analysis.",
    color: "secondary",
    featured: true,
    demoLink: "https://capeitinitiative-my.sharepoint.com/:v:/g/personal/lebogang_molepo_capaciti_org_za/IQCeFBNN4FbLSo0nkC8yq30AAQVfvq4cVNSblpJW6rbbFd8?e=ja8L6L&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
    liveLink: "https://word-whisperer-dash.vercel.app/",
  },
  {
    title: "Bias Audit Report",
    icon: Shield,
    image: biasImage,
    problem: "ML models can disadvantage certain groups (loan approvals).",
    solution: "Audited models, quantified bias, applied mitigation techniques.",
    technologies: ["Python", "Jupyter Notebook", "IBM AI Fairness 360", "Pandas", "Matplotlib"],
    outcome: "Identified bias patterns, reduced unfair outcomes, connected findings to ethical impact.",
    color: "highlight",
    featured: true,
    demoLink: "https://capeitinitiative-my.sharepoint.com/:p:/g/personal/tersh_kgaphola_capaciti_org_za/IQCUSrbd3cqaSLY4WifqsdkTAan-iRc_znCMNpZYbgb6hvs?e=WnciCs",
    liveLink: "https://github.com/TershK/Bais-Report.git",
    demoLabel: "Presentation",
    liveLabel: "Notebook",
  },
  {
    title: "RSA SENTINEL",
    icon: Shield,
    image: rsaImage,
    problem: "RSA Agent is a real-time emergency response app that quickly detects incidents and alerts responders.",
    solution: "Provides accurate location tracking, ensures user safety, and protects privacy.",
    technologies: ["AI APIs", "Real-time Detection", "Location Tracking", "React"],
    outcome: "Fast, secure, and reliable emergency response system built for high demand.",
    color: "primary",
    featured: false,
    demoLink: "https://drive.google.com/file/d/1aS8nSBP7-EXRGPF3VZc4iWmeSmNErGC3/view?usp=sharing",
    liveLink: "https://rsa-agent.vercel.app/",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold bg-secondary/90 text-secondary-foreground border border-secondary/30">
            Featured
          </span>
        )}
        <div
          className={`absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center ${
            project.color === "secondary"
              ? "bg-secondary text-secondary-foreground"
              : project.color === "primary"
              ? "bg-primary text-primary-foreground"
              : "bg-highlight text-highlight-foreground"
          }`}
        >
          <project.icon className="w-5 h-5" />
        </div>
      </div>

      {/* Project Header */}
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-secondary transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.problem}</p>
      </div>

      {/* Project Content */}
      <div className="p-5 flex-1 flex flex-col">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent className="space-y-3 mb-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
              <p className="text-sm text-muted-foreground">{project.outcome}</p>
            </div>

            {/* Technologies */}
            <div className="pt-3 border-t border-border">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full mb-3 text-muted-foreground hover:text-foreground">
              {isOpen ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show more
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.demoLink && (
            <Button variant="secondary" size="sm" className="flex-1" asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                {project.demoLabel || "Demo"}
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button variant={project.demoLink ? "outline" : "secondary"} size="sm" className="flex-1" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                {project.liveLabel || "Live App"}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

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
          className="text-center mb-12"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Show More Projects ({projects.length - 3} more)
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

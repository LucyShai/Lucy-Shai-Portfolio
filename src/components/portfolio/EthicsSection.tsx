import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Lock, Heart, Scale, Users } from "lucide-react";

const principles = [
  {
    icon: Scale,
    title: "Fairness",
    description: "Ensuring AI systems treat all users equitably without discrimination.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Making AI decision-making processes understandable and explainable.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Protecting user data and respecting individual privacy rights.",
  },
  {
    icon: Heart,
    title: "Social Good",
    description: "Building technology that benefits communities and society.",
  },
  {
    icon: Users,
    title: "Accountability",
    description: "Taking responsibility for AI outcomes and impacts.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Prioritizing user safety in all AI implementations.",
  },
];

export const EthicsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ethics" className="section-padding relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            My Commitment
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ethics & <span className="text-secondary">Responsible AI</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg leading-relaxed">
            I am committed to creating AI and software solutions that are fair, transparent, and socially 
            responsible, aligned with my goal of contributing to innovative technology that positively impacts 
            users and communities. My work emphasizes <span className="text-secondary font-semibold">bias detection</span>, 
            <span className="text-secondary font-semibold"> ethical decision-making</span>, 
            <span className="text-secondary font-semibold"> data privacy</span>, and 
            <span className="text-secondary font-semibold"> accessibility</span>, ensuring technology 
            benefits everyone equally. I uphold the following principles in all projects I undertake:
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                <principle.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                {principle.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote/Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/20 border border-secondary/30">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">
              Building technology that considers its impact on society
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

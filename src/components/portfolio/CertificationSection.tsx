 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Bot, Laptop, Brain, Shield, Award } from "lucide-react";
 
 const courseCategories = [
   {
     icon: Bot,
     title: "AI & ML Foundations",
     courses: [
       "AI For Everyone",
       "Introduction to Artificial Intelligence (AI)",
       "AI Essentials",
       "Artificial Intelligence on Microsoft Azure",
     ],
   },
   {
     icon: Laptop,
     title: "Programming & Development",
     courses: [
       "Python for Data Science, AI & Development",
       "Building AI Powered Chatbots Without Programming",
     ],
   },
   {
     icon: Brain,
     title: "Generative AI & LLMs",
     courses: [
       "Introduction to Generative AI",
       "Generative AI with Large Language Models",
       "AI Foundations: Prompt Engineering with ChatGPT",
     ],
   },
   {
     icon: Shield,
     title: "Responsible AI & Ethics",
     courses: [
       "Introduction to Responsible AI",
       "Trustworthy AI: Managing Bias, Ethics, and Accountability",
     ],
   },
 ];
 
 export const CertificationSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="certification" className="section-padding bg-background relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute inset-0">
         <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
             Professional Development
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 italic">
             Coursera <span className="text-secondary">Certification</span>
           </h2>
           <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
             Successfully completed an AI Bootcamp on Coursera with verified learner status. 
             Gained foundational knowledge in machine learning, neural networks, natural language processing, 
             and AI ethics. Developed practical, hands-on skills for real-world AI applications.
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-start">
           {/* Courses List */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.2, duration: 0.5 }}
             className="space-y-6"
           >
             <h3 className="text-lg font-semibold text-foreground mb-4">Courses I completed:</h3>
             
             {courseCategories.map((category, categoryIndex) => (
               <motion.div
                 key={category.title}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.5 }}
                 className="space-y-2"
               >
                 <div className="flex items-center gap-2">
                   <category.icon className="w-5 h-5 text-secondary" />
                   <span className="font-semibold text-foreground">{category.title}</span>
                 </div>
                 <ul className="space-y-1 pl-7">
                   {category.courses.map((course) => (
                     <li key={course} className="text-muted-foreground text-sm">
                       {course}
                     </li>
                   ))}
                 </ul>
               </motion.div>
             ))}
 
             <motion.p
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 0.7, duration: 0.5 }}
               className="text-muted-foreground mt-6 pt-4 border-t border-border"
             >
               Excited to apply these skills to real-world AI projects and continue growing in the field! 💡🤖
                <a 
                  href="https://coursera.org/share/34e8493e8152ca96e461231a4b85c269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-secondary hover:text-secondary/80 underline underline-offset-4 transition-colors"
                >
                  View my Coursera Certificate →
                </a>
             </motion.p>
           </motion.div>
 
           {/* Certificate Badge */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.4, duration: 0.5 }}
             className="flex justify-center lg:justify-end"
           >
             <div className="relative">
               {/* Badge Container */}
               <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-8 border-muted flex flex-col items-center justify-center text-center p-8 bg-card shadow-lg">
                 {/* CAPACITI Logo */}
                 <span className="text-xs tracking-[0.3em] text-muted-foreground mb-2">C A P A C I T I</span>
                 
                 {/* Main Title */}
                 <h4 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-4">
                   Artificial<br />Intelligence (AI)<br />Bootcamp
                 </h4>
                 
                 {/* Powered by Coursera */}
                 <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                   <span className="text-xs">powered by</span>
                   <span className="font-bold ml-1">Coursera</span>
                 </div>
               </div>
 
               {/* Decorative Award Icon */}
               <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                 <Award className="w-6 h-6 text-secondary-foreground" />
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
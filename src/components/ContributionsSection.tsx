import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const contributions = [
  {
    project: "DevMe",
    type: "Chrome Extension",
    description: "Improved onboarding by implementing a user-configurable setup flow, allowing users to view their own GitHub and LeetCode stats instead of hardcoded demo data.",
    link: "https://github.com/codebyNJ/DevMe/pull/2",
  },
  {
    project: "DocuHub",
    type: "WebAssembly-powered PDF Toolkit",
    description: "Fixed object URL memory leaks across multiple tools by implementing proper lifecycle cleanup and eliminating blob URL persistence in localStorage. Enhanced memory stability for large PDF processing and improved overall architectural consistency.",
    link: "https://github.com/R3ACTR/DocuHub/pull/192",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const ContributionCard = ({ contribution, index }: { contribution: typeof contributions[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 border border-border rounded-lg bg-card hover:border-primary/30 transition-all duration-300 shadow-xl overflow-hidden"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-20 h-20 -ml-2 -mt-2">
            <img 
              src="/images/contribution_illus.png" 
              alt="Contribution Illustration" 
              className="w-full h-full object-contain filter group-hover:drop-shadow-glow transition-all duration-500"
            />
          </div>
          <a 
            href={contribution.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors bg-background/50 backdrop-blur-sm rounded-sm"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="mb-4">
          <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
            {contribution.project}
          </h3>
          <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mt-1">
            {contribution.type}
          </p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {contribution.description}
        </p>

        <div className="mt-8">
          <a 
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-primary hover:underline underline-offset-4"
          >
            View Pull Request <span>→</span>
          </a>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
    </motion.div>
  );
};

const ContributionsSection = () => {
  return (
    <section id="contributions" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-muted/30 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Open Source
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Community contributions.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {contributions.map((contribution, i) => (
          <ContributionCard key={contribution.project} contribution={contribution} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ContributionsSection;

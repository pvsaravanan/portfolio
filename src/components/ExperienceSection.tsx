import { motion } from "framer-motion";

const experiences = [
  {
    company: "ServiceNow",
    role: "Associate Software Intern",
    period: "Aug 2026 - Feb 2027 (Incoming)",
    location: "Remote/Office",
    description:
      "Successfully recruited for the Associate Software Intern role at ServiceNow. Preparing to contribute to enterprise-level software engineering projects.",
    tags: ["Software Engineering", "Enterprise Software", "Internship"],
  },
  {
    company: "Zybeak Technologies",
    role: "Cybersecurity Intern",
    period: "Jan 2025 - Feb 2025",
    location: "Chennai, India",
    description:
      "Developed security protocols for systems and networks, monitored network traffic for threats, conducted vulnerability assessments and penetration testing, and supported firewalls and IDS systems.",
    tags: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "IDS"],
  },
  {
    company: "DLK Technologies",
    role: "Full-stack Developer Intern",
    period: "Jul 2024 - Aug 2024",
    location: "Chennai, India",
    description:
      "Built responsive web applications using HTML, CSS, JavaScript, and React. Developed REST APIs with Node.js and Express, integrated third-party services via JSON, and designed robust database systems.",
    tags: ["React", "Node.js", "Express", "REST APIs", "Database Design"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Sticky heading column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-4 md:sticky md:top-32 self-start"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Where I've worked.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Crafting code through impactful internships and specialized projects in AI and Cybersecurity.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="md:col-span-8 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative md:pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background hidden md:block group-hover:bg-primary transition-colors duration-300" />

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <span className="font-display text-sm text-primary font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5 shrink-0">
                    <span className="font-display text-xs text-muted-foreground tracking-wider">
                      {exp.period}
                    </span>
                    <span className="font-display text-xs text-muted-foreground/70">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-display tracking-wider uppercase border border-border rounded-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider between items */}
                {i < experiences.length - 1 && (
                  <div className="mt-12 border-b border-border/50 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

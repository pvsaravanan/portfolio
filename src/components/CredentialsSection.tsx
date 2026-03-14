import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

const certifications = [
  { 
    title: "Deep Research with LangGraph", 
    org: "LangChain", 
    date: "Sep 2025", 
    illus: "/images/cert_illus_1.png",
    image: "/images/deep_research_cert.jpg",
    link: "https://drive.google.com/file/d/1y4lzzmNTlVoS5LZV7oFYSOW_prkUZpV0/view?usp=sharing" 
  },
  { 
    title: "Deep Agents with LangGraph", 
    org: "LangChain", 
    date: "Sep 2025", 
    illus: "/images/cert_illus_2.png",
    image: "/images/deep_agents_cert.jpg",
    link: "https://drive.google.com/file/d/1y-x5LVSys-Lleb7TasTsqBh4jcxRbLiB/view?usp=sharing" 
  },
  { 
    title: "Deloitte Australia - Data Analytics Job Simulation", 
    org: "Forage", 
    date: "Dec 2025", 
    illus: "/images/cert_illus_3.png",
    image: "/images/deloitte_cert.jpg",
    link: "https://drive.google.com/file/d/1RAGq8s8hyyu08WELdEpE0JMYFLV7mucU/view?usp=sharing" 
  },
  { 
    title: "IBM Java Developer", 
    org: "IBM", 
    date: "Nov 2025", 
    illus: "/images/cert_illus_4.png",
    image: "/images/java_cert.jpg",
    link: "https://drive.google.com/file/d/1GlZZR4CcOBDdo5J6Jn1CnDCEPRzJ8xF9/view?usp=sharing" 
  },
  { 
    title: "Complete Ethical Hacking Masterclass", 
    org: "Udemy", 
    date: "Jan 2025", 
    illus: "/images/cert_illus_1.png",
    image: "/images/ethical_hacking_cert.jpg",
    link: "https://drive.google.com/file/d/10N_ZRlUvpiEtrpTgLF7pk-xEgWKJXArE/view?usp=sharing" 
  },
  { 
    title: "UIUX with Figma and Adobe XD", 
    org: "Udemy", 
    date: "Jan 2025", 
    illus: "/images/cert_illus_2.png",
    image: "/images/uiux_cert.jpg",
    link: "https://drive.google.com/file/d/1NozahdfKAwooaGVZZIVAYS7QNc_i5Utn/view?usp=sharing" 
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CertCard = ({ cert, index, onClick }: { cert: typeof certifications[0]; index: number; onClick: () => void }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardReveal}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative border border-border rounded-sm p-6 bg-card/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between overflow-hidden shadow-xl ${cert.image || (cert.link && cert.link !== "#") ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-20 h-20 md:w-28 md:h-28 -ml-4 -mt-4">
            <img 
              src={cert.illus} 
              alt="Certification Illustration" 
              className="w-full h-full object-contain filter group-hover:brightness-110 drop-shadow-xl"
            />
          </div>
          <div className="text-muted-foreground group-hover:text-primary transition-colors bg-background/50 backdrop-blur-sm p-1 rounded-sm">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
        <h3 className="font-display text-base font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
          {cert.title}
        </h3>
        <p className="text-sm text-foreground/80 mb-1">{cert.org}</p>
        <p className="text-xs text-muted-foreground mt-4 font-display uppercase tracking-widest">
          Issued {cert.date}
        </p>
      </div>
      
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity" />
    </motion.div>
  );
};

const CredentialsSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const handleCardClick = (cert: typeof certifications[0]) => {
    if (cert.image) {
      setSelectedCert(cert);
    } else if (cert.link && cert.link !== "#") {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="credentials" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Credentials
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Licenses & certifications.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} onClick={() => handleCardClick(cert)} />
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-display font-bold text-lg leading-none">{selectedCert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{selectedCert.org} · {selectedCert.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-2 md:p-4 bg-muted/30">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-md shadow-sm"
                />
              </div>
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => window.open(selectedCert.link !== "#" ? selectedCert.link : selectedCert.image, '_blank')}
                  className="text-xs font-display uppercase tracking-widest text-primary hover:underline flex items-center gap-2"
                >
                  Open Original <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CredentialsSection;

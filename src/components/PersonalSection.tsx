import { motion } from "framer-motion";
import GithubCalendar from "./GithubCalendar";

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const PersonalSection = () => {
  return (
    <section id="insights" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Insights
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Stats & activity.
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* LeetCode Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="font-display font-bold text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            LeetCode Mastery
          </h3>
          <div className="flex flex-col gap-4">

            <img 
              src="https://leetcard.jacoblin.cool/saravananpv?ext=heatmap" 
              alt="LeetCode Heatmap" 
              className="w-full rounded-lg border border-border shadow-xl hover:shadow-primary/5 transition-shadow"
            />
          </div>
        </motion.div>

        {/* Dynamic Activity Section */}
        <div className="space-y-12">
          {/* Spotify */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Recently Played
            </h3>
            <div className="p-4 border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden">
              <a href="https://open.spotify.com/user/31g2icyylgaoo2m7b2exxzjb2q3m" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://spotify-recently-played-readme.vercel.app/api?user=31g2icyylgaoo2m7b2exxzjb2q3m&count=5" 
                  alt="Spotify recently played" 
                  className="w-full h-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* GitHub Activity Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              GitHub Activity
            </h3>
            <GithubCalendar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;

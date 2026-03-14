import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CredentialsSection from "@/components/CredentialsSection";
import ContributionsSection from "@/components/ContributionsSection";
import PersonalSection from "@/components/PersonalSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import ParallaxBackground from "@/components/ParallaxBackground";
import ParallaxDivider from "@/components/ParallaxDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth relative">
      <ParallaxBackground />
      <CustomCursor />
      <NavBar />
      <HeroSection />
      <ParallaxDivider text="ABOUT" direction="left" />
      <AboutSection />
      <ParallaxDivider text="EDUCATION" direction="right" />
      <EducationSection />
      <ParallaxDivider text="EXPERIENCE" direction="left" />
      <ExperienceSection />
      <ParallaxDivider text="WORK" direction="right" />
      <ProjectsSection />
      <ParallaxDivider text="BLOGS" direction="left" />
      <BlogsSection />
      <ParallaxDivider text="OPEN SOURCE" direction="right" />
      <ContributionsSection />
      <ParallaxDivider text="SKILLS" direction="right" />
      <SkillsSection />
      <ParallaxDivider text="CREDENTIALS" direction="left" />
      <CredentialsSection />
      <ParallaxDivider text="INSIGHTS" direction="right" />
      <PersonalSection />
      <ParallaxDivider variant="shapes" />
      <ResumeSection />
      <ParallaxDivider text="CONTACT" direction="right" />
      <ContactSection />
    </div>
  );
};

export default Index;

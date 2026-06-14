import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import HeadTeacherWelcome from "@/components/HeadTeacherWelcome";
import FeesSection from "@/components/FeesSection";
import TermDates from "@/components/TermDates";
import AdminTeam from "@/components/AdminTeam";
import UNEBResults from "@/components/UNEBResults";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";
import SubjectsSection from "@/components/SubjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SportsSection from "@/components/SportsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";
import AnnouncementsSection from "@/components/AnnouncementsSection";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <StatsCounter />
      <AnnouncementsSection />
      <HeadTeacherWelcome />
      <FeesSection />
      <TermDates />
      <AdminTeam />
      <UNEBResults />
      <NewsSection />
      <AboutSection />
      <SubjectsSection />
      <WhyChooseUs />
      <SportsSection />
      <FacilitiesSection />
      <ContactSection />
    </PageTransition>
  );
}
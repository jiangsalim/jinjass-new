"use client";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import AnnouncementsSection from "@/components/AnnouncementsSection";
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

export default function HomePageClient(props: any) {
  return (
    <PageTransition>
      <Hero homePage={props.homePage} />
      <StatsCounter homePage={props.homePage} />
      <AnnouncementsSection announcements={props.announcements} />
      <HeadTeacherWelcome staff={props.staff} />
      <FeesSection feeStructure={props.feeStructure} />
      <TermDates termDates={props.termDates} />
      <AdminTeam staff={props.staff} />
      <UNEBResults unebResults={props.unebResults} />
      <NewsSection newsArticles={props.newsArticles} />
      <AboutSection aboutContent={props.aboutContent} />
      <SubjectsSection subjectCategories={props.subjectCategories} />
      <WhyChooseUs whyChooseUs={props.whyChooseUs} />
      <SportsSection sports={props.sports} clubs={props.clubs} />
      <FacilitiesSection facilities={props.facilities} />
      <ContactSection siteSettings={props.siteSettings} />
    </PageTransition>
  );
}
export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { siteSettingsQuery, homePageQuery, announcementsQuery, newsArticlesQuery, homepageStaffQuery, unebResultsQuery, feeStructureQuery, aboutContentQuery, termDatesQuery, whyChooseUsQuery, sportsQuery, clubsQuery, facilitiesQuery, subjectCategoriesQuery } from "@/lib/queries";
import HomePageClient from "@/components/HomePageClient";

export default async function HomePage() {
  const [siteSettings, homePage, announcements, newsArticles, staff, unebResults, feeStructure, aboutContent, termDates, whyChooseUs, sports, clubs, facilities, subjectCategories] = await Promise.all([
    client.fetch(siteSettingsQuery).catch(() => null),
    client.fetch(homePageQuery).catch(() => null),
    client.fetch(announcementsQuery).catch(() => []),
    client.fetch(newsArticlesQuery).catch(() => []),
    client.fetch(homepageStaffQuery).catch(() => []),
    client.fetch(unebResultsQuery).catch(() => null),
    client.fetch(feeStructureQuery).catch(() => null),
    client.fetch(aboutContentQuery).catch(() => null),
    client.fetch(termDatesQuery).catch(() => null),
    client.fetch(whyChooseUsQuery).catch(() => null),
    client.fetch(sportsQuery).catch(() => []),
    client.fetch(clubsQuery).catch(() => []),
    client.fetch(facilitiesQuery).catch(() => []),
    client.fetch(subjectCategoriesQuery).catch(() => []),
  ]);
  return <HomePageClient siteSettings={siteSettings} homePage={homePage} announcements={announcements} newsArticles={newsArticles} staff={staff} unebResults={unebResults} feeStructure={feeStructure} aboutContent={aboutContent} termDates={termDates} whyChooseUs={whyChooseUs} sports={sports} clubs={clubs} facilities={facilities} subjectCategories={subjectCategories} />;
}

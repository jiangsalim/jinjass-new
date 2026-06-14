"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const allNews = [
  {
    title: "Jinja SSS Rugby 15s Champions 2026",
    excerpt:
      "Celebrating our rugby team's outstanding achievement in the USSSA competitions.",
    date: "April 15, 2026",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1544621678-2cc1e4e72728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "rugby-champions-2026",
    author: "Sports Department",
    content: `
      <p>Jinja Senior Secondary School's rugby team has made history by winning the USSSA Rugby 15s Championship 2026. The tournament, held at Kyadondo Rugby Grounds, saw our mighty team dominate from the group stages all the way to the finals.</p>
      
      <p>The team displayed exceptional skill, teamwork, and determination throughout the competition. In the final match, Jinja SS faced off against a tough opponent but emerged victorious with a convincing scoreline.</p>
      
      <h3>Road to Victory</h3>
      
      <p>The journey to the championship was not easy. The team trained rigorously for months under the guidance of Coach Okello and Assistant Coach Nabirye. Their dedication paid off as they went unbeaten throughout the tournament.</p>
      
      <p>Standout players included team captain Mugisha John who led from the front, and the tournament's MVP Waiswa Peter whose tries were crucial in the knockout stages.</p>
      
      <h3>School Community Celebrates</h3>
      
      <p>The victory was celebrated by the entire school community. The Head Teacher, Balimusangayo Isaac, praised the team for their outstanding performance and for upholding the school's tradition of excellence in sports.</p>
      
      <p>"This victory is a testament to the hard work and dedication of our students and coaches. We are incredibly proud of what they have achieved," said the Head Teacher.</p>
      
      <p>The team was treated to a victory parade through Jinja town upon their return, with students, teachers, and parents lining the streets to celebrate the champions.</p>
    `,
  },
  {
    title: "Jinja District USSSA Football Finals",
    excerpt:
      "Our football team faced JIPRA in a thrilling district final held at Kakindu Stadium.",
    date: "April 3, 2026",
    category: "Football",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "football-finals-2026",
    author: "Sports Department",
    content: `
      <p>The Jinja District USSSA Football Finals brought together the best secondary school teams in the district for an electrifying showdown at Kakindu Stadium. Jinja SS faced off against rivals JIPRA in what would become one of the most memorable matches of the season.</p>
      
      <p>The atmosphere was electric as hundreds of students, teachers, and football fans filled the stadium. Both teams showed incredible skill and determination from the first whistle.</p>
      
      <h3>Match Highlights</h3>
      
      <p>Jinja SS started strong, dominating possession in the first half. Our striker opened the scoring with a brilliant goal in the 23rd minute, sending the Jinja SS fans into a frenzy. However, JIPRA equalized just before halftime with a well-taken free kick.</p>
      
      <p>The second half was a tense affair with both teams creating chances but unable to convert. The match ended 1-1 after regulation time, forcing a penalty shootout.</p>
      
      <p>In the penalty shootout, JIPRA narrowly won 4-2, but our boys held their heads high knowing they had given their best performance.</p>
    `,
  },
  {
    title: "A Big Win in Athletics!",
    excerpt:
      "Jinja SSS emerged victorious in the 15km municipal marathon, outperforming 8 secondary schools.",
    date: "March 20, 2026",
    category: "Athletics",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "athletics-win-2026",
    author: "Athletics Department",
    content: `
      <p>In a stunning display of endurance and athletic excellence, Jinja Senior Secondary School emerged victorious in the 15km municipal marathon, outperforming 8 other secondary schools across Jinja District.</p>
      
      <p>The marathon, which took place along the scenic routes of Jinja City, saw participation from over 200 student athletes from various schools in the district.</p>
      
      <h3>Top Performers</h3>
      
      <p>Our athletes dominated the race with impressive finishing times. The top three Jinja SS finishers all placed in the overall top five, securing the team victory with a comfortable points margin.</p>
      
      <p>The victory adds to Jinja SS's growing reputation as a powerhouse in athletics, complementing our success in other sports like rugby and football.</p>
    `,
  },
  {
    title: "Students Shine in Co-curricular Activities",
    excerpt:
      "Students showcased exceptional talent and teamwork during inter-school competitions.",
    date: "March 12, 2026",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "co-curricular-2026",
    author: "Co-Curricular Office",
    content: `
      <p>Students at Jinja Senior Secondary School showcased exceptional talent and teamwork during the inter-school co-curricular competitions held this term. The events brought together participants from various schools in the region.</p>
      
      <h3>Music, Dance & Drama</h3>
      
      <p>Our Music, Dance & Drama (MDD) team delivered outstanding performances in traditional dance, choral music, and drama categories. The creative presentations earned praise from judges and audience members alike.</p>
      
      <h3>Debate Club Success</h3>
      
      <p>The debate club continued its winning streak, advancing to the regional finals after convincing victories in the preliminary rounds. Our debaters demonstrated excellent research, articulation, and critical thinking skills.</p>
    `,
  },
  {
    title: "School Hosts Inter-House Science Fair",
    excerpt:
      "Students from all houses presented innovative science projects at the annual inter-house science fair.",
    date: "February 28, 2026",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "science-fair-2026",
    author: "Science Department",
    content: `
      <p>The annual Inter-House Science Fair at Jinja SS was a resounding success, with students from all houses presenting innovative projects that showcased creativity, scientific thinking, and problem-solving skills.</p>
      
      <p>Projects ranged from renewable energy solutions to agricultural innovations, reflecting the students' awareness of real-world challenges and their ability to apply scientific principles.</p>
      
      <h3>Winning Projects</h3>
      
      <p>The winning project was a solar-powered water purification system designed by the Blue House team. The judges praised its practicality and potential impact on communities with limited access to clean water.</p>
    `,
  },
  {
    title: "Term One Academic Excellence Awards",
    excerpt:
      "Top-performing students were recognized at the term one academic excellence awards ceremony.",
    date: "February 15, 2026",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "excellence-awards-2026",
    author: "Academics Office",
    content: `
      <p>Top-performing students were recognized at the Term One Academic Excellence Awards ceremony held at the school's main hall. The colorful event was attended by parents, guardians, teachers, and students.</p>
      
      <p>The awards recognized outstanding performance across all subjects and levels, with special recognition given to students who showed remarkable improvement.</p>
      
      <h3>Guest Speaker</h3>
      
      <p>The guest speaker, a distinguished alumnus, encouraged students to maintain discipline and hard work as the keys to success. The Head Teacher congratulated all award recipients and urged other students to strive for excellence.</p>
    `,
  },
  {
    title: "New ICT Laboratory Officially Opened",
    excerpt:
      "The new state-of-the-art ICT laboratory was officially opened by the Minister of Education.",
    date: "January 25, 2026",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "ict-lab-opening-2026",
    author: "ICT Department",
    content: `
      <p>The new state-of-the-art ICT laboratory at Jinja SS was officially opened by the Minister of Education and Sports. The facility features 100 modern computers, high-speed internet connectivity, and the latest educational software.</p>
      
      <p>This development marks a significant milestone in the school's digital transformation journey, providing students with access to cutting-edge technology for learning and research.</p>
      
      <h3>Features of the New Lab</h3>
      <ul>
        <li>100 workstations with latest computers</li>
        <li>High-speed fiber internet</li>
        <li>Interactive smart board</li>
        <li>Programming and robotics kits</li>
        <li>Air-conditioned learning environment</li>
      </ul>
    `,
  },
  {
    title: "Cultural Gala Day Celebrations",
    excerpt:
      "Students celebrated cultural diversity through traditional dances, music, food, and fashion.",
    date: "January 10, 2026",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "cultural-gala-2026",
    author: "Cultural Affairs",
    content: `
      <p>Jinja SS came alive with color, music, and celebration during the annual Cultural Gala Day. Students celebrated Uganda's rich cultural diversity through traditional dances, music performances, food exhibitions, and fashion displays.</p>
      
      <p>The event promoted unity, cultural appreciation, and understanding among students from different backgrounds. Each house presented a different region's culture, creating a vibrant showcase of Uganda's heritage.</p>
    `,
  },
  {
    title: "Parents Day & Career Guidance Workshop",
    excerpt:
      "Parents gathered at the school for an interactive career guidance workshop.",
    date: "December 5, 2025",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "parents-day-2025",
    author: "Guidance & Counseling",
    content: `
      <p>Parents gathered at Jinja SS for an interactive Parents Day and Career Guidance Workshop featuring professionals from various fields including medicine, engineering, law, business, and technology.</p>
      
      <p>The professionals shared their career journeys and mentored students, providing valuable insights into different career paths and the skills needed to succeed in each field.</p>
    `,
  },
];

const recentPosts = [
  { title: "Jinja SSS Rugby 15s Champions 2026", slug: "rugby-champions-2026", date: "April 15, 2026" },
  { title: "Jinja District USSSA Football Finals", slug: "football-finals-2026", date: "April 3, 2026" },
  { title: "A Big Win in Athletics!", slug: "athletics-win-2026", date: "March 20, 2026" },
  { title: "Students Shine in Co-curricular Activities", slug: "co-curricular-2026", date: "March 12, 2026" },
];

export default function SingleNewsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = allNews.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <PageHero
          title="Article Not Found"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "News & Events", href: "/news" },
          ]}
        />
        <section className="section-white py-20">
          <div className="container-custom text-center">
            <p className="text-gray-medium text-lg mb-6">
              The article you are looking for does not exist.
            </p>
            <Link href="/news" className="btn-primary">
              Back to News
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title={article.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & Events", href: "/news" },
          { label: article.title },
        ]}
        bgImage={article.image}
      />

      <section className="section-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-navy-light">
                <span className="bg-teal/10 text-teal text-sm font-semibold px-4 py-1.5 rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-medium dark:text-gray-400 text-sm">
                  {article.date}
                </span>
                <span className="text-gray-medium dark:text-gray-400 text-sm">
                  By {article.author}
                </span>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:font-heading prose-headings:text-navy dark:prose-headings:text-white
                  prose-p:text-charcoal dark:prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-teal prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-navy dark:prose-strong:text-white
                  prose-li:text-charcoal dark:prose-li:text-gray-300"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Back Button */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-navy-light">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to News
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h3 className="font-heading font-bold text-navy dark:text-white text-xl mb-6">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/news/${post.slug}`}
                      className={`block p-4 rounded-xl transition-all duration-300 ${
                        post.slug === slug
                          ? "bg-teal/10 border border-teal/20"
                          : "bg-gray-light dark:bg-navy-light hover:bg-teal/5 dark:hover:bg-navy border border-transparent"
                      }`}
                    >
                      <p className="text-navy dark:text-white font-medium text-sm line-clamp-2 mb-1">
                        {post.title}
                      </p>
                      <p className="text-gray-medium dark:text-gray-400 text-xs">
                        {post.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
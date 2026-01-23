/**
 * Home Page - Portfolio Landing
 * 
 * Structure:
 * - Navigation (sticky header)
 * - Hero (large typographic introduction)
 * - Featured Projects (main portfolio items)
 * - Community Contributions (open source/community work)
 * - More Projects (additional portfolio items)
 * - Experience & Education (achievements and interests)
 * - Contact (email and marquee CTA)
 * - Footer (social links and time)
 * 
 * Design philosophy:
 * - Clean, minimal design with focus on typography
 * - Smooth animations and interactions
 * - Mobile-first responsive approach
 * - Performance optimized with Next.js
 * 
 * Best practices:
 * - Component-based architecture
 * - Separation of concerns (data, styles, components)
 * - Semantic HTML structure
 * - Accessibility considerations
 * - No inline styles - all styling in SCSS
 */

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import CommunityContributions from '@/components/CommunityContributions'
import MoreProjects from '@/components/MoreProjects'
import ExperienceEducation from '@/components/ExperienceEducation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="home">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <CommunityContributions />
      <MoreProjects />
      <ExperienceEducation />
      <Contact />
      <Footer />
    </main>
  )
}

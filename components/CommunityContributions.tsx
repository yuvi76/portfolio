'use client'

import { communityContributions } from '@/data/portfolio'

/**
 * Community Contributions Component
 * 
 * Design approach:
 * - Centered text section between project sections
 * - Simple, clean typography
 * - Inline highlighted links
 * 
 * Best practices:
 * - All styles in SCSS (_content.scss)
 * - Data-driven from portfolio.ts
 * - Accessible link attributes
 * - Responsive padding and centering
 * 
 * Design decisions:
 * - Maximum width constraint for readability
 * - Large font size for description
 * - Orange hover color for links
 */
const CommunityContributions = () => {
  return (
    <section className="home__content">
      <h2 className="home__content__title">
        {communityContributions.title}
      </h2>
      
      <p className="home__content__desc">
        {communityContributions.description}
      </p>
    </section>
  )
}

export default CommunityContributions

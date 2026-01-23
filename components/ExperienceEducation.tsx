'use client'

import { experienceEducation, interests, icebreakers } from '@/data/portfolio'

/**
 * Experience & Education Component
 * 
 * Design approach:
 * - Two-column layout: Experience & Education (left) + Interests/Icebreakers (right)
 * - List of experience and education with top borders
 * - Additional sections for personal touches
 * 
 * Best practices:
 * - All styles in SCSS (_experience-education.scss)
 * - Data-driven from portfolio.ts
 * - Fade-in animations on scroll (data-fade-in attribute)
 * - Responsive column stacking on mobile
 * 
 * Design decisions:
 * - Experience & Education formatted as a bordered list
 * - Interests and Icebreakers add personality
 * - Contact button interaction for engagement
 */
const ExperienceEducation = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.home__contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home__experience-education">
      {/* Left Column: Experience & Education */}
      <div className="home__experience-education__left">
        <h2 className="experience-education__title">
          <span>EXPERIENCE & </span><br />
          <span>EDUCATION</span>
        </h2>

        <div className="home__experience-education__table">
          {experienceEducation.map((item, index) => (
            <div 
              key={index} 
              className="experience-education__item" 
              data-fade-in=""
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Interests & Icebreakers */}
      <div className="home__experience-education__right">
        {/* Interests */}
        <div className="home__experience-education__stack" data-fade-in="">
          <h2 className="home__content__title">{interests.title}</h2>
          <p className="home__content__desc">
            {interests.description} <br />
            <a
              href={interests.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              See my Github
            </a>
          </p>
        </div>

        {/* Icebreakers */}
        <div className="home__experience-education__ice" data-fade-in="">
          <h2 className="home__content__title">{icebreakers.title}</h2>
          <p className="home__content__desc">
            {icebreakers.description}{' '}
            <button 
              className="contact-scroll"
              onClick={scrollToContact}
              aria-label="Scroll to contact section"
            >
              GET IN TOUCH
            </button>{' '}
            to know more about me.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceEducation

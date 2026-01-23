'use client'

import { useEffect, useState } from 'react'
import { personalInfo } from '@/data/portfolio'

/**
 * Navigation Component
 * 
 * Design approach:
 * - Sticky navigation with clean layout
 * - Left side: Name and tagline
 * - Right side: Availability status and contact button
 * - Responsive breakpoints for mobile/tablet/desktop
 * 
 * Best practices:
 * - No inline styles (all styles in SCSS)
 * - Semantic HTML structure
 * - Accessibility with proper button roles
 * - Smooth scroll behavior for contact button
 */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.querySelector('.home__contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="home__nav" data-scrolled={isScrolled}>
      <div className="home__nav__left">
        <div className="nav__name" data-nav-anim="">
          <span>
            {personalInfo.name.first} <br />
            {personalInfo.name.last}
          </span>
        </div>

        <div className="nav__folio hide-mobile" data-nav-anim="">
          <span>
            {personalInfo.role} <br />
            {personalInfo.tagline}
          </span>
        </div>
      </div>

      <div className="home__nav__right">
        <div className="nav__folio hide-desktop" data-nav-anim="">
          {personalInfo.role} <br />
          {personalInfo.tagline}
        </div>

        <div className="nav__availability" data-nav-anim="">
          {personalInfo.availability}
        </div>

        <button 
          className="nav__button c-button contact-scroll" 
          data-nav-anim=""
          onClick={scrollToContact}
          aria-label="Scroll to contact section"
        >
          <span className="c-link">
            <span className="c-link__inner">
              <span>contact</span>
              <span className="c-link__animated">contact</span>
            </span>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

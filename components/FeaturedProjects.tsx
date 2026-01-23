'use client'

import { useEffect, useRef } from 'react'
import { featuredProjects } from '@/data/portfolio'

/**
 * Featured Projects Component
 * 
 * Design approach:
 * - Alternating left/right alignment for visual rhythm
 * - Large typographic titles (16rem Bebas Neue)
 * - Decorative lines between projects
 * - Scroll-triggered animations
 * - Bi-directional scrolling based on alignment
 * 
 * Best practices:
 * - All styles in SCSS (_projects.scss)
 * - Data-driven rendering from portfolio.ts
 * - Accessible links with proper attributes
 * - Responsive design with mobile overrides
 * - Intersection Observer for scroll-triggered animations
 * 
 * Design decisions:
 * - First project includes "FEATURED PROJECTS" label
 * - Visit Site buttons hidden on desktop, shown on mobile
 * - Projects scroll into view trigger animations
 * - Right-aligned projects scroll left, left-aligned scroll right
 */
const FeaturedProjects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const wrapper = entry.target.querySelector('.title__scroll-wrapper')
            if (wrapper) {
              wrapper.classList.add('in-view')
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    // Scroll-based horizontal movement
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const wrapper = ref.querySelector('.title__scroll-wrapper') as HTMLElement
          if (wrapper) {
            const rect = ref.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
            
            // Only apply transform when project is in viewport
            if (scrollProgress > 0 && scrollProgress < 1) {
              const project = featuredProjects[index]
              
              if (project.align === 'right') {
                // Right-aligned projects: Start centered (200px), move left as you scroll
                const startOffset = 200 // Start position (centered)
                const moveAmount = startOffset - (scrollProgress * 400) // Move 400px left
                wrapper.style.transform = `translateX(${moveAmount}px)`
              } else {
                // Left-aligned projects: Start at 0, move right as you scroll
                const moveAmount = scrollProgress * 300
                wrapper.style.transform = `translateX(${moveAmount}px)`
              }
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <section className="home__projects" data-projects-section="1">
      {/* Opening line */}
      <span className="home__projects__line left">
        <span></span>
      </span>

      {/* Projects */}
      {featuredProjects.map((project, index) => (
        <div key={project.id} ref={(el) => { projectRefs.current[index] = el }}>
          <div className={`home__projects__project ${project.align}`}>
            {/* Label */}
            <div className="home__projects__project__label">
              <div className={`label__inner ${index === 0 ? 'label-1' : ''}`}>
                {index === 0 ? (
                  <>
                    <p>
                      FEATURED <br />
                      PROJECTS ({featuredProjects.length})
                    </p>
                    <p>
                      {project.role.split(' / ')[0]} / <br />
                      {project.role.split(' / ')[1]}
                    </p>
                  </>
                ) : (
                  <p>
                    {project.role.split(' / ')[0]} / <br />
                    {project.role.split(' / ')[1] || ''}
                  </p>
                )}
              </div>
            </div>

            {/* Project Title Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="home__projects__project__link"
            >
              <h1 className="home__projects__project__title">
                <span className="inline-ovh">
                  <div className={`title__scroll-wrapper ${project.align === 'right' ? 'scroll-left' : 'scroll-right'}`}>
                    <div className={`title__main ${project.align}`}>
                      <span
                        className="slide-up"
                        data-content={project.title}
                        aria-hidden="true"
                      ></span>
                      {project.title}
                    </div>
                    {/* Duplicate for seamless scroll */}
                    <div className={`title__main ${project.align}`} aria-hidden="true">
                      {project.title}
                    </div>
                  </div>
                </span>
              </h1>
            </a>

            {/* Visit Site Button */}
            <div className="project__link">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="c-button"
              >
                <span className="c-link">
                  <span className="c-link__inner">
                    <span>
                      Visit Site
                      <span className="share-icon">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z"
                            fill="#777"
                          />
                        </svg>
                      </span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Line after project */}
          <span className={`home__projects__line ${project.align}`}>
            <span></span>
          </span>
        </div>
      ))}
    </section>
  )
}

export default FeaturedProjects

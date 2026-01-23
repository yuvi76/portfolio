'use client'

import { useEffect, useRef } from 'react'
import { about } from '@/data/portfolio'

/**
 * Hero Component
 * 
 * Design approach:
 * - Large typographic hero with animated letters
 * - Split layout: Left (title) / Right (description)
 * - Individual letter hover effects
 * - Scroll-based parallax animations
 * - Dash scaling and text movement on scroll
 * 
 * Best practices:
 * - Scroll-based animations with IntersectionObserver
 * - CSS-only hover effects for letters
 * - Semantic heading structure (h1)
 * - Mobile-first responsive design
 * - Performance optimized (passive scroll listener)
 * 
 * Dependencies:
 * - All styles defined in SCSS (_hero.scss)
 */
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const leftTextRef = useRef<HTMLSpanElement>(null)
  const rightTextRef = useRef<HTMLSpanElement>(null)
  const dashRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const heroRect = heroRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        1 - (heroRect.bottom / windowHeight)
      ))

      // Left text moves right as you scroll
      if (leftTextRef.current) {
        const moveAmount = scrollProgress * -100 // 100px max movement
        leftTextRef.current.style.transform = `translateX(${moveAmount}px)`
      }

      // Right text moves left as you scroll
      if (rightTextRef.current) {
        const moveAmount = scrollProgress * 100 // -100px max movement
        rightTextRef.current.style.transform = `translateX(${moveAmount}px)`
      }

      // Dash scales up as you scroll
      if (dashRef.current) {
        const scale = 1 + (scrollProgress * 0.75) // Scale from 1 to 1.5
        dashRef.current.style.transform = `scaleX(${scale})`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="home__hero" ref={heroRef}>
      <div className="hero__title">
        {/* Mobile Title */}
        <h1 className="mobile">
          FULL <br />
          —— STACK <br />
          DEVELOPER
        </h1>

        {/* Desktop Title - Top Row */}
        <h1 className="hero__title__top overflow desktop">
          <div className="hero__title__top" data-title-overflow="">
            <span className="hero__title__left" ref={leftTextRef}>
              {'FULL'.split('').map((letter, index) => (
                <span key={index} className="hero__hover">
                  {letter}
                </span>
              ))}
            </span>
            
            <span className="hero__title__dash desktop" ref={dashRef}>——</span>
            <span className="hero__title__dash tablet">——</span>

            <span className="hero__title__right" ref={rightTextRef}>
              {'STACK'.split('').map((letter, index) => (
                <span key={index} className="hero__hover">
                  {letter}
                </span>
              ))}
            </span>
          </div>
        </h1>

        {/* Desktop Title - Bottom Row */}
        <span className="hero__title__bottom overflow">
          <div className="hero__title__bottom">
            <h1 className="bottom__left desktop" data-title-overflow="">
              {'DEVELOPER'.split('').map((letter, index) => (
                <span key={index} className="hero__hover">
                  {letter}
                </span>
              ))}
            </h1>

            <div className="bottom__right">
              <p className="hero__paragraph">
                <span className="first-word">{about.title}</span> &nbsp; 
                {about.description.replace('About ', '')}
              </p>

              <div className="hero__scroll">
                <p>Scroll down</p>
                <div className="c-infinite">
                  <span className="c-link">
                    <span className="c-link__inner">
                      <span>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z"
                            fill="#777777"
                          />
                        </svg>
                      </span>
                      <span className="c-link__animated">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z"
                            fill="#777777"
                          />
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </section>
  )
}

export default Hero

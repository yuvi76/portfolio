'use client'

import { socialLinks, footer } from '@/data/portfolio'

/**
 * Footer Component
 * 
 * Design approach:
 * - Two-part layout: Social Links (center), Credits (right)
 * - Responsive stacking on mobile
 * 
 * Best practices:
 * - All styles in SCSS (_footer.scss)
 * - Accessible social links
 * - Clean grid layout
 * 
 * Design decisions:
 * - Designer credit attribution
 */
const Footer = () => {
  return (
    <footer className="home__footer" id="js-footer">
      {/* Center: Social Links */}
      <div className="home__footer__center">
        <div className="footer__links">
          {/* First Row */}
          <div className="link__flex">
            <div className="link__flex__inner">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-button"
                >
                  <span className="c-link">
                    <span className="c-link__inner">
                      <span>{link.name.toUpperCase()}</span>
                      <span className="c-link__animated">{link.name.toUpperCase()}</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="link__flex">
            <div className="link__flex__inner second">
              {socialLinks.slice(2, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-button"
                >
                  <span className="c-link">
                    <span className="c-link__inner">
                      <span>{link.name.toUpperCase()}</span>
                      <span className="c-link__animated">{link.name.toUpperCase()}</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Designer Credit */}
      <p className="home__footer__right">
        Design by{' '}
        <a
          href={footer.designer.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.designer.name}
        </a>
      </p>
    </footer>
  )
}

export default Footer

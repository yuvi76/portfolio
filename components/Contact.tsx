'use client'

import { useState } from 'react'
import { contact, personalInfo } from '@/data/portfolio'

/**
 * Contact Component
 * 
 * Design approach:
 * - Large marquee text animation
 * - Email copy-to-clipboard functionality
 * - Visual feedback on user interactions
 * 
 * Best practices:
 * - All styles in SCSS (_contact.scss)
 * - Progressive enhancement for clipboard API
 * - Accessible button with proper ARIA labels
 * - Smooth animations and transitions
 * 
 * Design decisions:
 * - Marquee pauses on hover
 * - Email shows "Click to Copy" on hover
 * - Toast notification on successful copy
 * 
 * Dependencies:
 * - Clipboard API (with fallback)
 */
const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = personalInfo.email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="home__contact">
      <p className="home__contact__desc">
        {contact.description}
      </p>

      {/* Top Line */}
      <div className="line-wrapper">
        <span className="home__projects__line left">
          <span></span>
        </span>
      </div>

      {/* Marquee */}
      <div className="marquee">
        <a
          href={`mailto:${personalInfo.email}?subject=Let's work together!&body=Hello, I think we need you to work on/collaborate this particular product...`}
          className="marquee__wrap"
        >
          <div className="marquee__inner">
            <span aria-hidden="true" className="inner-span">
              <span
                className="slide-up"
                data-content={contact.marqueeText}
                aria-hidden="true"
              ></span>
              {contact.marqueeText}
            </span>
            <span className="inner-span">
              <span
                className="slide-up"
                data-content={contact.marqueeText}
                aria-hidden="true"
              ></span>
              {contact.marqueeText}
            </span>
          </div>
        </a>
      </div>

      {/* Bottom Line */}
      <div className="line-wrapper">
        <span className="home__projects__line right">
          <span></span>
        </span>
      </div>

      {/* Email Section */}
      <div className="home__contact__email">
        <button 
          className="email"
          onClick={copyEmail}
          aria-label="Copy email address to clipboard"
        >
          {personalInfo.email}
        </button>
        <div className="to-copy">
          <span>{copied ? 'Copied!' : contact.copyText}</span>
        </div>
      </div>
    </section>
  )
}

export default Contact

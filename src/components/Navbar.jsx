import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close the mobile menu when the viewport grows to desktop size.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Allow closing the menu with the Escape key for keyboard users.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/70 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8" aria-label="Primary">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          className="focus-ring -ml-1 inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-ink transition hover:bg-base-200 lg:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* Logo (centred on mobile, left-aligned on desktop) */}
        <a
          href="#home"
          onClick={closeMenu}
          className="focus-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0"
          aria-label="Dev Stack home"
        >
          <Logo />
        </a>

        {/* Desktop: centre navigation links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-brand-ink/75 transition hover:bg-base-200 hover:text-brand-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Sign In + Sign Up */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="focus-ring hidden rounded-lg px-3 py-2 text-sm font-semibold text-brand-ink/80 transition hover:bg-base-200 hover:text-brand-ink sm:inline-flex"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="focus-ring brand-gradient-bg brand-gradient-bg-hover inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-card"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-base-300/70 bg-white/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="focus-ring block rounded-lg px-3 py-2.5 text-base font-semibold text-brand-ink/80 transition hover:bg-base-200 hover:text-brand-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1 sm:hidden">
              <a
                href="#contact"
                onClick={closeMenu}
                className="focus-ring block rounded-lg px-3 py-2.5 text-base font-semibold text-brand-ink/80 transition hover:bg-base-200 hover:text-brand-ink"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

/**
 * Shared social links + icons used by the Contact section and the Footer.
 * Destinations are real, working pages (no dead "#" links).
 */
export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ProgrammingHero1/B14-A05-DevStack',
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    href: 'https://x.com',
    icon: (
      <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <path d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4V8.4Zm5.1 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H8.5V8.4Z" />
    ),
  },
]

export default function SocialLinks({ variant = 'light', className = '' }) {
  const base =
    variant === 'dark'
      ? 'border-white/15 bg-white/10 text-white hover:bg-white/20'
      : 'border-base-300 bg-white text-brand-ink hover:border-secondary hover:text-secondary'

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border transition ${base}`}
            aria-label={`${social.label} (opens in a new tab)`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              {social.icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}

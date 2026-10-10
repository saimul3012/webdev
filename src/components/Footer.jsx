import Logo from './Logo.jsx'
import SocialLinks from './SocialLinks.jsx'

const LINK_GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
      { label: 'Your Stack', href: '#technologies' },
      { label: 'Home', href: '#home' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Use', href: '#terms' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand block */}
          <div className="max-w-sm">
            <a href="#home" className="focus-ring inline-flex rounded-lg" aria-label="Dev Stack home">
              <span className="inline-flex items-center gap-2.5">
                <span className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-xl" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
                    <path d="m3 12.5 9 4.5 9-4.5" />
                    <path d="m3 17 9 4.5 9-4.5" />
                  </svg>
                </span>
                <span className="brand-gradient-text text-xl font-extrabold tracking-tight">Dev Stack</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Discover, compare and collect the technologies that power modern software, all in one
              clean and responsive workspace.
            </p>
            <SocialLinks variant="dark" className="mt-5" />
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="focus-ring rounded text-sm text-white/65 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">© {year} Dev Stack. Built for learning and demonstration.</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="focus-ring rounded text-sm text-white/60 transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="focus-ring rounded text-sm text-white/60 transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import SocialLinks from './SocialLinks.jsx'

const CHANNELS = [
  {
    id: 'github',
    title: 'Project repository',
    description: 'Read the source code, open an issue or explore how Dev Stack is built.',
    href: 'https://github.com/ProgrammingHero1/B14-A05-DevStack',
    cta: 'Open on GitHub',
    icon: <path d="M4 4h16v16H4zM4 9h16M9 9v11" />,
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Share ideas for new technologies or improvements on Twitter / X.',
    href: 'https://x.com',
    cta: 'Message on X',
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />,
  },
  {
    id: 'network',
    title: 'Connect',
    description: 'Follow along for developer tips and connect professionally on LinkedIn.',
    href: 'https://www.linkedin.com',
    cta: 'Connect on LinkedIn',
    icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM6 9H2v12h4zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contact</span>
          <h2 id="contact-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Get in <span className="brand-gradient-text">touch</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
            Have a question about Dev Stack or want to suggest a technology? Reach out through any of
            the channels below. This project does not collect any personal data.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel) => (
            <article key={channel.id} className="card-lift flex h-full flex-col rounded-2xl border border-base-300 bg-base-200/40 p-6 shadow-card">
              <span className="brand-gradient-bg flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {channel.icon}
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-ink">{channel.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/65">{channel.description}</p>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-2 self-start rounded-full border border-base-300 bg-white px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-secondary hover:text-secondary"
              >
                {channel.cta}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

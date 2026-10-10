import bannerStack from '../assets/banner-stack.png'

const HERO_STATS = [
  { value: '15+', label: 'Technologies' },
  { value: '7', label: 'Categories' },
  { value: '100%', label: 'Open & Free' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-violet/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" aria-hidden="true" />
            Build your modern developer toolkit
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            Curate your perfect{' '}
            <span className="brand-gradient-text">developer stack</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-ink/70 sm:text-lg lg:mx-0">
            Explore the technologies that power modern software, from frontend frameworks to
            databases and DevOps tools. Pick what you need and build a stack that fits your project.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="focus-ring brand-gradient-bg brand-gradient-bg-hover inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-card sm:w-auto"
            >
              Explore Technologies
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#about"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full border border-base-300 bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:border-secondary hover:text-secondary sm:w-auto"
            >
              Learn More
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-base-300 pt-6">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="brand-gradient-text block text-2xl font-extrabold sm:text-3xl">{stat.value}</span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-brand-ink/60">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="brand-gradient-bg absolute inset-6 -z-10 rounded-[2.5rem] opacity-10 blur-2xl" aria-hidden="true" />
            <img
              src={bannerStack}
              alt="Illustration of a layered technology stack with tools, frameworks and databases"
              width="526"
              height="526"
              loading="eager"
              className="mx-auto w-full max-w-sm animate-float drop-shadow-xl lg:max-w-md"
              onError={(event) => {
                // Fallback: hide the image so a broken link never appears.
                event.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

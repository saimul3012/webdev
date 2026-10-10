const STEPS = [
  {
    id: 'explore',
    title: 'Explore',
    description: 'Browse technologies across frontend, backend, databases, DevOps and more, each with a clear rating and difficulty.',
    icon: <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3" />,
  },
  {
    id: 'compare',
    title: 'Compare',
    description: 'See categories, badges and difficulty levels side by side to understand what each tool is best suited for.',
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    id: 'build',
    title: 'Build',
    description: 'Add the technologies you want into your own stack and keep a focused shortlist for your next project.',
    icon: <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12.5 12 17l9-4.5M3 17l9 4.5 9-4.5" />,
  },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">About</span>
            <h2 id="about-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              What is <span className="brand-gradient-text">Dev Stack</span>?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-ink/70">
              Dev Stack is a lightweight tool for developers who want to plan the technologies they
              will use. Instead of jumping between articles and docs, you can browse a curated
              library, compare each option and collect the ones you like into a single stack.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
              Every technology includes a description, a category, a difficulty level and a rating,
              so you can quickly understand where it fits. Your selected stack stays on screen while
              you browse, making it easy to refine your choices as you go.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['No sign-up needed', 'Beginner-friendly', 'Fully responsive'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-base-300 bg-white px-3 py-1.5 text-xs font-semibold text-brand-ink/70">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {STEPS.map((step) => (
              <li key={step.id} className="flex items-start gap-4 rounded-2xl border border-base-300 bg-white p-5 shadow-card">
                <span className="brand-gradient-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {step.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-bold text-brand-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink/65">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

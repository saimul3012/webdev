const PROJECTS = [
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder',
    description:
      'A responsive personal portfolio generator where developers pick a theme and publish a clean profile page in minutes.',
    gradient: 'from-brand-orange to-brand-pink',
    icon: (
      <path d="M4 5h16v10H4zM8 19h8M12 15v4" />
    ),
    tags: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'task-manager-api',
    title: 'Task Manager API',
    description:
      'A REST API that stores projects and tasks with authentication, validation and paginated list endpoints.',
    gradient: 'from-brand-pink to-brand-violet',
    icon: (
      <path d="M9 11l2 2 4-4M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    ),
    tags: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description:
      'An interactive dashboard that visualises usage data with charts, filters and a compact, card-based layout.',
    gradient: 'from-brand-violet to-brand-orange',
    icon: (
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    ),
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-16 sm:py-20" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Showcase</span>
          <h2 id="projects-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Projects built with a <span className="brand-gradient-text">modern stack</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
            Example projects that show how the technologies on Dev Stack fit together in real
            applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-white shadow-card"
            >
              <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <svg viewBox="0 0 24 24" className="h-12 w-12 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {project.icon}
                </svg>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-brand-ink">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/65">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-base-300 bg-base-200/70 px-3 py-1 text-xs font-semibold text-brand-ink/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href="#technologies"
                  className="focus-ring mt-5 inline-flex items-center gap-2 self-start rounded-full border border-base-300 px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-secondary hover:text-secondary"
                >
                  Explore related tech
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

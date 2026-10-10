import TechnologyCard from './TechnologyCard.jsx'
import Loader from './Loader.jsx'
import YourStack from './YourStack.jsx'

export default function TechnologySection({
  technologies,
  isLoading,
  error,
  onRetry,
  stack,
  stackIds,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  return (
    <section id="technologies" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="technologies-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Technology Library</span>
          <h2 id="technologies-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Explore the <span className="brand-gradient-text">technologies</span> you can stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
            Browse tools across frontend, backend, databases, DevOps and more. Add the ones you want
            to your personal stack and compare what fits your next project.
          </p>
        </div>

        {/* Grid + sidebar */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {isLoading && <Loader />}

            {!isLoading && error && (
              <div
                role="alert"
                className="flex flex-col items-center gap-4 rounded-2xl border border-rose-200 bg-rose-50 px-6 py-12 text-center"
              >
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v5M12 16h.01" />
                </svg>
                <div>
                  <p className="text-base font-bold text-rose-700">Could not load the technologies</p>
                  <p className="mt-1 text-sm text-rose-600">{error}</p>
                </div>
                <button
                  type="button"
                  onClick={onRetry}
                  className="focus-ring brand-gradient-bg brand-gradient-bg-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
                >
                  Try Again
                </button>
              </div>
            )}

            {!isLoading && !error && (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={onAdd}
                    isAdded={stackIds.includes(technology.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      </div>
    </section>
  )
}

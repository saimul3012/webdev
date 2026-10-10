import TechnologyIcon from './TechnologyIcon.jsx'

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length
  const countLabel = count === 1 ? 'Technology Selected' : 'Technologies Selected'

  return (
    <aside
      className="lg:sticky lg:top-24"
      aria-label="Your selected technology stack"
    >
      <div className="overflow-hidden rounded-2xl border border-base-300 bg-white shadow-card">
        {/* Header */}
        <div className="border-b border-base-300 bg-base-200/60 px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold text-brand-ink">Your Stack</h3>
            <span className="brand-gradient-bg inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold text-white">
              {count}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-brand-ink/60" aria-live="polite">
            {count} {countLabel}
          </p>
        </div>

        {/* Body */}
        <div className="p-5">
          {count === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
              <svg
                viewBox="0 0 96 96"
                className="h-24 w-24 text-brand-ink/25"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M48 14 14 32l34 18 34-18-34-18Z" />
                <path d="M14 48l34 18 34-18" />
                <path d="M14 64l34 18 34-18" className="opacity-40" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-brand-ink">Your stack is empty</p>
                <p className="mt-1 text-sm text-brand-ink/60">
                  Add technologies from the grid to build your personal stack.
                </p>
              </div>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {stack.map((technology) => (
                <li
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-200/40 p-3 transition hover:border-secondary/40 hover:bg-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-base-300 bg-white p-1.5">
                    <TechnologyIcon src={technology.icon} alt={technology.name} className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-brand-ink">{technology.name}</p>
                    <p className="truncate text-xs font-medium text-brand-ink/55">{technology.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(technology)}
                    className="focus-ring inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-ink/50 transition hover:bg-rose-50 hover:text-rose-600"
                    aria-label={`Remove ${technology.name} from your stack`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {count > 0 && (
            <button
              type="button"
              onClick={onRemoveAll}
              className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" />
              </svg>
              Remove All
            </button>
          )}
        </div>
      </div>
    </aside>
  )
}

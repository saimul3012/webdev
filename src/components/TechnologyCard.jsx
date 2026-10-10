import TechnologyIcon from './TechnologyIcon.jsx'

// Small helper to colour-code the difficulty chip consistently.
const DIFFICULTY_STYLES = {
  'Beginner-Friendly': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
}

export default function TechnologyCard({ technology, onAdd, isAdded }) {
  const { name, category, description, icon, rating, difficulty, badge } = technology

  return (
    <article
      className="card-lift focus-within:ring-2 focus-within:ring-secondary/60 flex h-full flex-col rounded-2xl border border-base-300 bg-white p-5 shadow-card"
      aria-label={`${name}, ${category}`}
    >
      {/* Header: icon + badge */}
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-base-300 bg-base-200/70 p-2.5">
          <TechnologyIcon src={icon} alt={name} className="h-9 w-9" />
        </span>
        {badge && (
          <span className="rounded-full border border-base-300 bg-base-200/80 px-3 py-1 text-xs font-semibold text-brand-ink/70">
            {badge}
          </span>
        )}
      </div>

      {/* Name + description */}
      <h3 className="mt-4 text-lg font-bold text-brand-ink">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/65">{description}</p>

      {/* Meta: category + difficulty */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="brand-gradient-text rounded-full border border-base-300 bg-base-200/60 px-3 py-1 text-xs font-semibold">
          {category}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            DIFFICULTY_STYLES[difficulty] ?? 'border-base-300 bg-base-200 text-brand-ink/70'
          }`}
        >
          {difficulty}
        </span>
      </div>

      {/* Rating + action */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-base-300 pt-4">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink" aria-label={`Rated ${rating} out of 5`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
            <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
          </svg>
          <span>{rating.toFixed(1)}</span>
        </p>

        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          aria-disabled={isAdded}
          className={
            isAdded
              ? 'inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700'
              : 'focus-ring brand-gradient-bg brand-gradient-bg-hover inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-card'
          }
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}

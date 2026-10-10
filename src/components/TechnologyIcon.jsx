import { useState } from 'react'

/**
 * Renders a technology logo with a graceful fallback if the remote icon
 * fails to load, so the UI never shows a broken image.
 */
export default function TechnologyIcon({ src, alt, className = 'h-8 w-8' }) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <span
        className={`${className} flex items-center justify-center rounded-lg bg-base-200 text-brand-ink/50`}
        role="img"
        aria-label={`${alt} icon unavailable`}
      >
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 3v4M15 3v4" />
          <rect x="4" y="7" width="16" height="14" rx="2" />
          <path d="M9 13v3M12 13v3M15 13v3" />
        </svg>
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={`${alt} logo`}
      className={`${className} object-contain`}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  )
}

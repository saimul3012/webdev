/**
 * Brand logo: a gradient "stack" mark plus the Dev Stack wordmark.
 * `compact` renders just the mark (used in tight spaces).
 */
export default function Logo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="brand-gradient-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-soft"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
          <path d="m3 12.5 9 4.5 9-4.5" />
          <path d="m3 17 9 4.5 9-4.5" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-gradient-text text-xl font-extrabold tracking-tight">Dev Stack</span>
      )}
    </span>
  )
}

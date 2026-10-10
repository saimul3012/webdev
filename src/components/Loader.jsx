export default function Loader({ label = 'Loading technologies…' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20" role="status" aria-live="polite">
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-4 border-base-300" />
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-brand-pink border-r-brand-violet" />
      </span>
      <p className="text-sm font-medium text-brand-ink/70">{label}</p>
    </div>
  )
}

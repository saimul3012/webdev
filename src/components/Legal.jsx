/**
 * Compact legal sections so the footer's Privacy Policy and Terms links
 * point to real, on-page content instead of dead "#" links.
 */
export default function Legal() {
  return (
    <section className="scroll-mt-24 border-t border-base-300 bg-base-200/60 py-12" aria-label="Legal information">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div id="privacy" className="scroll-mt-24 rounded-2xl border border-base-300 bg-white p-6 shadow-card">
          <h3 className="text-lg font-bold text-brand-ink">Privacy Policy</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">
            Dev Stack runs entirely in your browser and stores your selected technologies in memory
            only. The site does not ask for, collect or transmit any personal information, and it
            uses no tracking or advertising cookies.
          </p>
        </div>

        <div id="terms" className="scroll-mt-24 rounded-2xl border border-base-300 bg-white p-6 shadow-card">
          <h3 className="text-lg font-bold text-brand-ink">Terms of Use</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">
            Dev Stack is provided for educational and informational purposes. Technology details,
            ratings and difficulty levels are simple guidelines and may change as tools evolve. Use
            the information here as a starting point for your own research.
          </p>
        </div>
      </div>
    </section>
  )
}

import { useReveal } from '../../hooks/useReveal'
import { about } from '../../data/portfolio'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.4fr_0.6fr]">
          <div data-reveal className="reveal">
            <p className="font-mono text-xs text-signal-soft">01 — About</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">A student who prefers breaking things on purpose.</h2>
          </div>

          <div data-reveal className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-muted max-w-[62ch]">
              {about.summary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {about.focusAreas.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-base-border px-3.5 py-1.5 text-xs text-ink-muted font-mono"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

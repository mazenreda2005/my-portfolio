import { Award } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { certifications } from '../../data/portfolio'

export default function Certifications() {
  const ref = useReveal()

  return (
    <section id="certifications" ref={ref} className="border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-14 max-w-[52ch]">
          <p className="font-mono text-xs text-signal-soft">03 — Certifications & Training</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Where the hours went.</h2>
        </div>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              data-reveal
              className="reveal grid grid-cols-1 gap-4 rounded-lg border border-base-border bg-base-panel p-6 transition-colors duration-300 hover:border-brass/40 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brass/30 bg-brass-dim text-brass-soft">
                <Award size={18} />
              </div>

              <div>
                <h3 className="font-display text-lg text-ink">{cert.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{cert.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted max-w-[62ch]">{cert.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <span key={s} className="rounded-md bg-base-panel2 px-2.5 py-1 text-xs text-ink-muted font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <p className="text-sm text-ink">{cert.date}</p>
                <p className="mt-1 text-xs text-ink-faint">{cert.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

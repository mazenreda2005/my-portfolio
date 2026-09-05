import { Radar, ShieldAlert, Waypoints, Terminal } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { cyberPractice } from '../../data/portfolio'

const icons = [Radar, ShieldAlert, Waypoints, Terminal]

export default function CyberFocus() {
  const ref = useReveal()

  return (
    <section id="cyber-focus" ref={ref} className="relative overflow-hidden border-t border-base-border bg-[#080b10] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grain-line opacity-[0.25]" aria-hidden="true" />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-14 max-w-[56ch]">
          <p className="font-mono text-xs text-brass-soft">Cybersecurity Focus</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Practicing offense, in controlled environments.
          </h2>
          <p className="mt-4 text-ink-muted">
            My security training centers on penetration testing and vulnerability assessment — working through lab
            environments and real-world attack scenarios with the same tools used in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cyberPractice.map((p, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={p.tool}
                data-reveal
                className="reveal flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-brass/30"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-brass/25 text-brass-soft">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-ink">{p.tool}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.use}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

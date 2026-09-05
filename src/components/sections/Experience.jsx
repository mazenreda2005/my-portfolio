import { useReveal } from '../../hooks/useReveal'
import { experience } from '../../data/portfolio'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-14 max-w-[52ch]">
          <p className="font-mono text-xs text-signal-soft">05 — Experience</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Hands-on time in the field.</h2>
        </div>

        <div className="relative border-l border-base-border pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <div key={role.role} data-reveal className="reveal relative pb-2" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal ring-4 ring-base" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-ink">{role.role}</h3>
                <span className="font-mono text-xs text-ink-faint">{role.date} · {role.period}</span>
              </div>
              <p className="mt-1 text-sm text-signal-soft">{role.org}</p>
              <ul className="mt-4 space-y-2">
                {role.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <span key={t} className="rounded-md bg-base-panel2 px-2.5 py-1 text-xs text-ink-muted font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

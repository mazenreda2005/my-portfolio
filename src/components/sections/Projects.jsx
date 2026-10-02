import { useMemo, useState } from 'react'
import { X, Github, ArrowUpRight, Folder, ShieldCheck } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { projects } from '../../data/portfolio'

export default function Projects() {
  const ref = useReveal()
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  // Only offer filters for tech used in at least two projects, most common first.
  const allTech = useMemo(() => {
    const counts = new Map()
    projects.forEach((p) => p.tech.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1)))
    const common = [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([t]) => t)
    return ['All', ...common]
  }, [])

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter))

  return (
    <section id="projects" ref={ref} className="border-t border-base-border bg-base-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[52ch]">
            <p className="font-mono text-xs text-signal-soft">04 — Projects</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Things I've built.</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTech.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors duration-200 ${
                  filter === t
                    ? 'border-signal bg-signal/10 text-signal-soft'
                    : 'border-base-border text-ink-muted hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {filtered.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              className={`reveal group relative flex flex-col rounded-lg border bg-base-panel p-6 transition-colors duration-300 hover:border-signal/40 ${
                p.featured ? 'border-signal/25' : 'border-base-border'
              }`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-signal-soft group-hover:border-signal/50">
                  {p.featured ? <ShieldCheck size={16} /> : <Folder size={16} />}
                </div>
                {p.featured && (
                  <span className="rounded-full border border-brass/30 bg-brass-dim px-2.5 py-1 text-[11px] text-brass-soft">
                    Cloud security
                  </span>
                )}
              </div>

              <h3 className="mt-5 font-display text-xl text-ink">
                {/* The stretched ::after makes the whole card open the details */}
                <button
                  onClick={() => setActive(p)}
                  className="text-left after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:outline-none"
                >
                  {p.name}
                </button>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-base-panel2 px-2.5 py-1 text-xs text-ink-muted font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex max-w-full items-center gap-2 rounded-md border border-base-border px-3 py-2 text-xs text-ink-muted transition-colors duration-200 hover:border-signal/50 hover:text-signal-soft"
                  >
                    <Github size={14} className="shrink-0" />
                    <span className="truncate font-mono">{p.github.replace('https://github.com/', '')}</span>
                    <ArrowUpRight size={14} className="shrink-0" />
                  </a>
                ) : (
                  <p className="text-xs text-ink-faint">Code available on request</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm px-5"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} details`}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-xl border border-base-border bg-base-panel p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 text-ink-faint hover:text-ink"
            >
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl text-ink pr-8">{active.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{active.description}</p>

            <div className="mt-5">
              <p className="text-xs text-ink-faint font-mono">What I built</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{active.contribution}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <span key={t} className="rounded-md bg-base-panel2 px-2.5 py-1 text-xs text-ink-muted font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {active.github ? (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-base-border px-4 py-2 text-sm text-ink hover:border-signal/50"
                >
                  <Github size={15} /> View code on GitHub
                </a>
              ) : (
                <p className="text-xs text-ink-faint">Code available on request.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

import { useMemo, useState } from 'react'
import { X, Github, ExternalLink, Folder } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { projects } from '../../data/portfolio'

export default function Projects() {
  const ref = useReveal()
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const allTech = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set)]
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
            <button
              key={p.name}
              onClick={() => setActive(p)}
              data-reveal
              className="reveal group flex flex-col rounded-lg border border-base-border bg-base-panel p-6 text-left transition-colors duration-300 hover:border-signal/40"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-signal-soft group-hover:border-signal/50">
                  <Folder size={16} />
                </div>
                <ExternalLink size={15} className="text-ink-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-base-panel2 px-2.5 py-1 text-xs text-ink-muted font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </button>
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
              <p className="text-xs uppercase tracking-wide text-ink-faint font-mono">My contribution</p>
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
                  <Github size={15} /> View code
                </a>
              ) : (
                <p className="text-xs text-ink-faint">Repository link not yet published.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

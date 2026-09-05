import { useReveal } from '../../hooks/useReveal'
import { skills } from '../../data/portfolio'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="border-t border-base-border bg-base-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-14 max-w-[52ch]">
          <p className="font-mono text-xs text-signal-soft">02 — Skills</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">What I actually work with.</h2>
          <p className="mt-4 text-ink-muted">
            Tools and languages I've used hands-on through coursework, training, and projects — no inflated ratings, just what I know.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <div
              key={group.category}
              data-reveal
              className="reveal rounded-lg border border-base-border bg-base-panel p-6 transition-colors duration-300 hover:border-signal/40"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <h3 className="font-display text-lg text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-base-panel2 px-2.5 py-1.5 text-xs text-ink-muted font-mono"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

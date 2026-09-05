import { useReveal } from '../../hooks/useReveal'
import { careerGoals } from '../../data/portfolio'

export default function CareerGoals() {
  const ref = useReveal()

  return (
    <section id="career-goals" ref={ref} className="border-t border-base-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.55fr_0.45fr] md:items-start">
          <div data-reveal className="reveal">
            <p className="font-mono text-xs text-signal-soft">07 — What I'm Looking For</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Where I'd like to grow next.</h2>
            <p className="mt-5 max-w-[56ch] text-ink-muted leading-relaxed">{careerGoals.objective}</p>
          </div>

          <ul data-reveal className="reveal space-y-3" style={{ transitionDelay: '0.1s' }}>
            {careerGoals.interests.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-base-border bg-base-panel px-5 py-4 text-sm text-ink-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

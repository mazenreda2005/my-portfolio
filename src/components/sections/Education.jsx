import { GraduationCap } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { education } from '../../data/portfolio'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" ref={ref} className="border-t border-base-border bg-base-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-14 max-w-[52ch]">
          <p className="font-mono text-xs text-signal-soft">06 — Education</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Foundation.</h2>
        </div>

        <div data-reveal className="reveal flex flex-col gap-5 rounded-lg border border-base-border bg-base-panel p-7 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-signal/30 bg-signal-dim text-signal-soft">
            <GraduationCap size={22} />
          </div>
          <div>
            <h3 className="font-display text-xl text-ink">{education.university}</h3>
            <p className="mt-1 text-sm text-ink-muted">{education.faculty}</p>
            <p className="mt-2 font-mono text-xs text-ink-faint">Expected graduation — {education.expected}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

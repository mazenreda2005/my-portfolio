import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import photo from '../../assets/mazen-portrait.jpg'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient network backdrop */}
      <div className="pointer-events-none absolute inset-0 grain-line opacity-[0.4]" aria-hidden="true" />
      <svg
        className="pointer-events-none absolute -right-32 -top-16 h-[520px] w-[520px] opacity-[0.35] animate-drift"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="1.5" fill="#4c7fff" />
        <circle cx="120" cy="90" r="1.5" fill="#4c7fff" />
        <circle cx="300" cy="140" r="1.5" fill="#c9a227" />
        <circle cx="260" cy="300" r="1.5" fill="#4c7fff" />
        <circle cx="90" cy="270" r="1.5" fill="#c9a227" />
        <line x1="200" y1="200" x2="120" y2="90" stroke="#4c7fff" strokeWidth="0.6" strokeOpacity="0.5" />
        <line x1="200" y1="200" x2="300" y2="140" stroke="#4c7fff" strokeWidth="0.6" strokeOpacity="0.5" />
        <line x1="200" y1="200" x2="260" y2="300" stroke="#4c7fff" strokeWidth="0.6" strokeOpacity="0.5" />
        <line x1="200" y1="200" x2="90" y2="270" stroke="#c9a227" strokeWidth="0.6" strokeOpacity="0.4" />
        <line x1="120" y1="90" x2="300" y2="140" stroke="#4c7fff" strokeWidth="0.4" strokeOpacity="0.3" />
      </svg>

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div className="order-2 md:order-1 animate-riseIn" style={{ animationDelay: '0.05s', opacity: 0 }}>
          <p className="mb-5 flex items-center gap-2 text-sm text-signal-soft font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
            Open to Cloud Security internships & junior roles
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.08] text-ink sm:text-6xl">
            {profile.fullName.split(' ').slice(0, 2).join(' ')}
          </h1>
          <p className="mt-3 text-lg text-ink-muted sm:text-xl max-w-[46ch]">{profile.title}</p>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-ink-muted">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('#projects')}
              className="rounded-md bg-signal px-5 py-3 text-sm font-medium text-base hover:bg-signal-soft transition-colors duration-200"
            >
              View my projects
            </button>
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-5 py-3 text-sm text-ink hover:border-signal/50 hover:text-signal-soft transition-colors duration-200"
            >
              <Download size={16} /> Download CV
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-3 py-3 text-sm text-ink-muted hover:text-ink transition-colors duration-200"
            >
              <Mail size={16} /> Contact me
            </button>
          </div>

          <div className="mt-14 flex items-center gap-2 text-xs text-ink-faint font-mono">
            <ArrowDown size={14} className="animate-bounce" />
            Scroll to explore
          </div>
        </div>

        <div className="order-1 md:order-2 animate-riseIn" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
            <div className="absolute -inset-3 rounded-2xl border border-base-border" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 z-10 hidden sm:block rounded-lg border border-brass/30 bg-base-panel/90 backdrop-blur px-4 py-2.5 shadow-xl shadow-black/40">
              <p className="font-mono text-[11px] text-brass-soft">MSA University</p>
              <p className="text-xs text-ink-muted">Computer Science · 2027</p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-base-border bg-base-panel">
              <img
                src={photo}
                alt="Portrait of Mazen Reda"
                className="h-full w-full object-cover object-top grayscale-[15%] contrast-[1.05]"
                width={480}
                height={600}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

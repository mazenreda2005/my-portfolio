import { Github, Mail, Linkedin } from 'lucide-react'
import { nav, profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-base-border py-12">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-muted">{profile.title}</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-ink-muted hover:border-signal/40 hover:text-signal-soft transition-colors"
              >
                <Mail size={15} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-ink-muted hover:border-signal/40 hover:text-signal-soft transition-colors"
              >
                <Github size={15} />
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-base-border text-ink-muted hover:border-signal/40 hover:text-signal-soft transition-colors"
                >
                  <Linkedin size={15} />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick(item.href)
                    }}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-base-border pt-6">
          <p className="text-xs text-ink-faint">© {year} {profile.name}. Built with React, Vite & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

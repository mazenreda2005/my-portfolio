import { useState } from 'react'
import { Mail, Github, MapPin, Linkedin, Send } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { profile } from '../../data/portfolio'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={ref} className="border-t border-base-border bg-base-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div data-reveal className="reveal mb-14 max-w-[56ch]">
          <p className="font-mono text-xs text-signal-soft">08 — Contact</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Let's build something secure.</h2>
          <p className="mt-4 text-ink-muted">
            Have an internship, a project, or just a question about something I've built? I'd like to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.4fr_0.6fr]">
          <div data-reveal className="reveal space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-base-border bg-base-panel px-5 py-4 text-sm text-ink-muted transition-colors duration-200 hover:border-signal/40 hover:text-ink"
            >
              <Mail size={17} className="text-signal-soft shrink-0" />
              <span className="break-all">{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-base-border bg-base-panel px-5 py-4 text-sm text-ink-muted transition-colors duration-200 hover:border-signal/40 hover:text-ink"
            >
              <Github size={17} className="text-signal-soft shrink-0" />
              github.com/{profile.githubHandle}
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-base-border bg-base-panel px-5 py-4 text-sm text-ink-muted transition-colors duration-200 hover:border-signal/40 hover:text-ink"
              >
                <Linkedin size={17} className="text-signal-soft shrink-0" />
                LinkedIn
              </a>
            )}
            <div className="flex items-center gap-3 rounded-lg border border-base-border bg-base-panel px-5 py-4 text-sm text-ink-muted">
              <MapPin size={17} className="text-signal-soft shrink-0" />
              {profile.location}
            </div>
          </div>

          <form data-reveal className="reveal space-y-4" style={{ transitionDelay: '0.1s' }} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-ink-faint font-mono">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-base-border bg-base-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-ink-faint font-mono">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-base-border bg-base-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-ink-faint font-mono">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-md border border-base-border bg-base-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
                placeholder="What would you like to say?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-medium text-base hover:bg-signal-soft transition-colors duration-200"
            >
              <Send size={15} /> Send message
            </button>
            <p className="text-xs text-ink-faint">Opens your email client with the message pre-filled.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

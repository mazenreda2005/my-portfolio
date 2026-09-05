import { useEffect, useRef } from 'react'

// Adds the .is-visible class to an element (and optionally its
// [data-reveal] children) once it scrolls into view. Respects
// prefers-reduced-motion by doing nothing (CSS handles that fallback).
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.hasAttribute('data-reveal')
      ? [node]
      : Array.from(node.querySelectorAll('[data-reveal]'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}

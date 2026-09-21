import { ArrowUp } from 'lucide-react'
import { siteConfig } from '../data/config'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-paper/10 px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-tight">LINDA TAMER</p>
          <p className="mt-1 text-sm tracking-wide text-muted">UI/UX DESIGNER</p>
        </div>

        <div className="flex gap-8 text-sm tracking-wide text-muted">
          <a data-cursor="hover" href={siteConfig.links.behance} target="_blank" rel="noreferrer" className="hover:text-paper">
            Behance
          </a>
          <a data-cursor="hover" href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
          <a data-cursor="hover" href={siteConfig.links.email} className="hover:text-paper">
            Email
          </a>
        </div>

        <button
          data-cursor="hover"
          onClick={scrollTop}
          aria-label="Back to top"
          className="flex items-center gap-2 self-start text-xs tracking-[0.2em] text-muted transition-colors hover:text-paper md:self-auto"
        >
          BACK TO TOP <ArrowUp size={14} />
        </button>
      </div>

      <p className="mx-auto mt-14 max-w-7xl text-xs text-muted/70">© 2026 Linda Tamer. All rights reserved.</p>
    </footer>
  )
}

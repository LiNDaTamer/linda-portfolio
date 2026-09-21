import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects, getProjectBySlug } from '../data/projects'

export default function ProjectNavigation({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug)
  const next = projects[(idx + 1) % projects.length]
  const current = getProjectBySlug(currentSlug)

  if (!current) return null

  return (
    <div className="flex items-center justify-between border-t border-paper/10 px-6 py-10 md:px-10">
      <Link to="/work" data-cursor="hover" className="flex items-center gap-2 text-sm tracking-wide text-muted hover:text-paper">
        <ArrowLeft size={16} /> All Work
      </Link>
      <Link
        to={`/work/${next.slug}`}
        data-cursor="view"
        className="flex items-center gap-2 text-sm tracking-wide text-paper hover:text-accent"
      >
        Next Project: {next.title} <ArrowRight size={16} />
      </Link>
    </div>
  )
}

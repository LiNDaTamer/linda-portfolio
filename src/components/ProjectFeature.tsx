import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '../data/projects'
import { FadeIn } from './AnimatedText'

export default function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1

  return (
    <Link
      to={`/work/${project.slug}`}
      data-cursor="view"
      className="group block border-t border-paper/10 py-10 md:py-16"
    >
      <div
        className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14 ${
          reverse ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <FadeIn className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900">
          <motion.img
            src={project.coverImage}
            alt={`${project.title} cover`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.opacity = '0'
            }}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <span className="text-xs tracking-[0.2em] text-accent">{project.number}</span>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-paper transition-colors md:text-5xl">
            {project.displayTitle}
          </h3>
          <p className="mt-3 text-sm tracking-wide text-muted">{project.category}</p>
          <p className="mt-5 max-w-md text-base text-paper/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {project.description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium tracking-wide text-paper">
            <span>{project.year}</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </FadeIn>
      </div>
    </Link>
  )
}

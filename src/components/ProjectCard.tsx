import { MoreWorkItem } from '../data/projects'
import { FadeIn } from './AnimatedText'

export default function ProjectCard({ item, delay = 0 }: { item: MoreWorkItem; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <button
        data-cursor="view"
        className="group block w-full text-left"
        onClick={() => {
          // Individual detail pages for smaller work can be wired up here later.
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-900">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.05]"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.opacity = '0'
            }}
          />
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-base font-medium text-paper">{item.title}</h3>
            <p className="mt-1 text-xs tracking-wide text-muted">{item.category}</p>
          </div>
          <span className="text-xs text-muted">{item.year}</span>
        </div>
      </button>
    </FadeIn>
  )
}

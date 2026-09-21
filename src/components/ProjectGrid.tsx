import { useState } from 'react'
import { moreWork, moreWorkCategories } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? moreWork : moreWork.filter((p) => p.category === active)

  return (
    <div>
      <div className="no-scrollbar mb-10 flex gap-6 overflow-x-auto border-b border-paper/10 pb-4">
        {moreWorkCategories.map((cat) => (
          <button
            key={cat}
            data-cursor="hover"
            onClick={() => setActive(cat)}
            className={`shrink-0 text-sm tracking-wide transition-colors ${
              active === cat ? 'text-accent' : 'text-muted hover:text-paper'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <ProjectCard key={item.id} item={item} delay={(i % 6) * 0.06} />
        ))}
      </div>
    </div>
  )
}

import SectionHeading from '../components/SectionHeading'
import ProjectFeature from '../components/ProjectFeature'
import ProjectGrid from '../components/ProjectGrid'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <div className="px-6 pb-24 pt-36 md:px-10 md:pt-44">
      <SectionHeading eyebrow="Portfolio" lines={['SELECTED', 'WORK']} />

      <div className="mt-14">
        {projects.map((project, i) => (
          <ProjectFeature key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-28">
        <SectionHeading eyebrow="Explorations" lines={['MORE', 'WORK']} />
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}

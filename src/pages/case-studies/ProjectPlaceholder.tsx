import { useParams } from 'react-router-dom'
import CaseStudyHero from '../../components/CaseStudyHero'
import CaseStudySection, { PlaceholderVisual } from '../../components/CaseStudySection'
import ProjectNavigation from '../../components/ProjectNavigation'
import { getProjectBySlug } from '../../data/projects'

// Generic template for any project not yet given a bespoke case-study layout.
// Duplicate this file and customize once real content is ready.
export default function ProjectPlaceholder() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="px-6 pb-24 pt-40 text-center md:px-10">
        <p className="text-muted">Project not found.</p>
      </div>
    )
  }

  return (
    <div>
      <CaseStudyHero
        eyebrow={project.category}
        titleLines={[project.displayTitle]}
        subtitle={project.description}
        coverImage={project.coverImage}
        meta={[
          { label: 'Role', value: project.role },
          { label: 'Year', value: project.year },
        ]}
      />

      <CaseStudySection number="01" title="Overview">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Replace this section with a real overview for {project.title}.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="Key Screens">
        <PlaceholderVisual label="Add project visuals here" />
      </CaseStudySection>

      <ProjectNavigation currentSlug={project.slug} />
    </div>
  )
}

import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ProjectFeature from '../components/ProjectFeature'
import DesignProcess from '../components/DesignProcess'
import { projects } from '../data/projects'
import { FadeIn } from '../components/AnimatedText'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="selected-work" className="px-6 pt-24 md:px-10">
        <SectionHeading eyebrow="Portfolio" lines={['SELECTED', 'WORK']} />
        <div className="mt-14">
          {projects.map((project, i) => (
            <ProjectFeature key={project.id} project={project} index={i} />
          ))}
        </div>
        <FadeIn className="flex justify-end border-t border-paper/10 pt-8">
          <Link to="/work" data-cursor="hover" className="text-sm tracking-wide text-muted hover:text-paper">
            View all work →
          </Link>
        </FadeIn>
      </section>

      <section className="px-6 py-28 md:px-10">
        <SectionHeading eyebrow="Process" lines={['HOW I', 'WORK']} />
        <div className="mt-14">
          <DesignProcess />
        </div>
      </section>
    </>
  )
}

import SectionHeading from '../components/SectionHeading'
import ProjectGrid from '../components/ProjectGrid'

export default function MoreWork() {
  return (
    <div className="px-6 pb-24 pt-36 md:px-10 md:pt-44">
      <SectionHeading eyebrow="Explorations" lines={['MORE', 'WORK']} />
      <div className="mt-14">
        <ProjectGrid />
      </div>
    </div>
  )
}

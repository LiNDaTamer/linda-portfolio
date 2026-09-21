import SectionHeading from '../components/SectionHeading'
import DesignProcess from '../components/DesignProcess'
import { FadeIn } from '../components/AnimatedText'

const skills = [
  'UI/UX DESIGN',
  'DESIGN SYSTEMS',
  'WIREFRAMING',
  'PROTOTYPING',
  'INTERACTION DESIGN',
  'RESPONSIVE DESIGN',
]

const tools = ['Figma', 'Adobe Tools', 'HTML/CSS', 'Vue.js', 'Flutter']

export default function About() {
  return (
    <div className="px-6 pb-24 pt-36 md:px-10 md:pt-44">
      <SectionHeading eyebrow="Profile" lines={['ABOUT', 'LINDA']} />

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr]">
        <FadeIn className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-900">
          <img
            src="/images/linda-portrait.jpg"
            alt="Portrait of Linda Tamer"
            className="h-full w-full object-cover grayscale"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.opacity = '0'
            }}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl leading-relaxed text-paper/90 md:text-2xl">
            Linda Tamer is a UI/UX Designer focused on creating clear, thoughtful, and visually
            refined digital experiences.
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            Based in Mansoura, Egypt, she approaches every project with a focus on structure and
            clarity first — building interfaces that hold up under real use, not just first
            impressions.
          </p>

          <div className="mt-12">
            <p className="mb-4 text-xs tracking-[0.2em] text-accent">SKILLS</p>
            <ul className="space-y-1">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border-t border-paper/10 py-3 text-lg font-medium tracking-tight text-paper first:border-t-0 md:text-xl"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-xs tracking-[0.2em] text-accent">TOOLS</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-paper/15 px-4 py-1.5 text-sm text-paper/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-28">
        <SectionHeading eyebrow="Approach" lines={['DESIGN', 'PROCESS']} />
        <div className="mt-12">
          <DesignProcess />
        </div>
      </div>
    </div>
  )
}

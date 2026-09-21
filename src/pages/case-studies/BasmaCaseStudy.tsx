import { motion } from 'framer-motion'
import CaseStudySection, { PlaceholderVisual } from '../../components/CaseStudySection'
import ProjectNavigation from '../../components/ProjectNavigation'
import { RevealText, FadeIn } from '../../components/AnimatedText'

const journey = ['Logo', 'Visual Language', 'Design System', 'Website', 'Digital Experience']

export default function BasmaCaseStudy() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-10 md:pt-44">
        {/* subtle fingerprint-inspired decorative rings, restrained */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-accent/40 md:h-[560px] md:w-[560px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full border border-accent/40 md:h-[420px] md:w-[420px]"
        />

        <p className="text-xs tracking-[0.25em] text-accent">Branding / UI/UX / Web Design</p>
        <h1 className="mt-4 text-display-sm font-semibold tracking-tight text-paper" dir="rtl">
          <RevealText delay={0.05}>بَصْمَة</RevealText>
        </h1>
        <FadeIn delay={0.15}>
          <p className="mt-2 text-lg text-muted">Digital Media Agency</p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10 max-w-xl">
          <p className="text-2xl font-medium tracking-tight text-paper md:text-3xl">
            FROM FINGERPRINT<br />TO EXPERIENCE
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-sm bg-neutral-900">
          <img
            src="/images/basma-cover.jpg"
            alt=""
            className="h-full w-full object-cover"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.opacity = '0'
            }}
          />
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted">
          {journey.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="text-paper">{step}</span>
              {i < journey.length - 1 && <span className="text-accent">↓</span>}
            </span>
          ))}
        </FadeIn>
      </section>

      <CaseStudySection number="01" title="Logo & Mark">
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
          The identity begins with a single fingerprint mark — a symbol of individuality —
          reinterpreted as a clean, geometric brand mark.
        </p>
        <PlaceholderVisual label="Logo exploration — replace with real asset" ratio="aspect-[16/9]" />
      </CaseStudySection>

      <CaseStudySection number="02" title="Visual Language">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <PlaceholderVisual label="Color System" ratio="aspect-square" />
          <PlaceholderVisual label="Typography" ratio="aspect-square" />
          <PlaceholderVisual label="Pattern / Texture" ratio="aspect-square" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="03" title="Design System">
        <PlaceholderVisual label="Component library — replace with real asset" />
      </CaseStudySection>

      <CaseStudySection number="04" title="Wireframes">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PlaceholderVisual label="Wireframe — 01" ratio="aspect-[4/3]" />
          <PlaceholderVisual label="Wireframe — 02" ratio="aspect-[4/3]" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="05" title="Website">
        <PlaceholderVisual label="Website screens — replace with real asset" />
      </CaseStudySection>

      <CaseStudySection number="06" title="Digital Experience">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          The visual system extends into interactive, prototype-level experiences — carrying the
          fingerprint concept from static mark to a living digital presence.
        </p>
        <div className="mt-8">
          <PlaceholderVisual label="Interaction / prototype visuals" />
        </div>
      </CaseStudySection>

      <ProjectNavigation currentSlug="basma" />
    </div>
  )
}

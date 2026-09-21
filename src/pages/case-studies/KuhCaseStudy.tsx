import CaseStudyHero from '../../components/CaseStudyHero'
import CaseStudySection, { PlaceholderVisual } from '../../components/CaseStudySection'
import ProjectNavigation from '../../components/ProjectNavigation'

export default function KuhCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        eyebrow="Healthcare / UX/UI Design"
        titleLines={['KUH E-CLINIC']}
        subtitle="Digital Healthcare Management System"
        coverImage="/images/kuh-cover.jpg"
        meta={[
          { label: 'Role', value: 'UX/UI Designer' },
          { label: 'Platform', value: 'Healthcare Management System' },
          { label: 'Screens', value: '100+ screens' },
          { label: 'Year', value: '2025' },
        ]}
      />

      <CaseStudySection number="01" title="Overview">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          KUH E-Clinic is a comprehensive healthcare management system built to support clinics
          and hospitals with patient records, scheduling, and day-to-day clinical operations.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Problem">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Existing clinical workflows were fragmented across disconnected tools, making it
          difficult for staff to manage patients efficiently and for patients to access care
          information clearly.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="My Role">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          As UX/UI Designer, responsibilities spanned user flow architecture, wireframing,
          interface design, and building a scalable design system across 100+ screens.
        </p>
      </CaseStudySection>

      <CaseStudySection number="04" title="User Flows">
        <PlaceholderVisual label="User flow diagram — replace with real asset" />
      </CaseStudySection>

      <CaseStudySection number="05" title="Wireframes">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PlaceholderVisual label="Wireframe — 01" ratio="aspect-[4/3]" />
          <PlaceholderVisual label="Wireframe — 02" ratio="aspect-[4/3]" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="06" title="Design System">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <PlaceholderVisual label="Typography" ratio="aspect-square" />
          <PlaceholderVisual label="Color System" ratio="aspect-square" />
          <PlaceholderVisual label="Components" ratio="aspect-square" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="07" title="Final UI">
        <PlaceholderVisual label="Final UI showcase — replace with real asset" />
      </CaseStudySection>

      <CaseStudySection number="08" title="Key Screens">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PlaceholderVisual label="Key Screen — Dashboard" />
          <PlaceholderVisual label="Key Screen — Patient Record" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="09" title="Prototype">
        <PlaceholderVisual label="Embedded prototype / video / link" />
      </CaseStudySection>

      <CaseStudySection number="10" title="Outcome">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          A cohesive, scalable interface system that gives clinical staff and patients a clearer,
          more structured way to manage healthcare interactions.
        </p>
      </CaseStudySection>

      <ProjectNavigation currentSlug="kuh-e-clinic" />
    </div>
  )
}

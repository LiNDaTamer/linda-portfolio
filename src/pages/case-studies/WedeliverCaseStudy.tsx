import CaseStudyHero from '../../components/CaseStudyHero'
import CaseStudySection, { PlaceholderVisual } from '../../components/CaseStudySection'
import ProjectNavigation from '../../components/ProjectNavigation'

export default function WedeliverCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        eyebrow="Product Design / UI/UX"
        titleLines={['WEDELIVER']}
        subtitle="A structured, product-oriented delivery app case study."
        coverImage="/images/wedeliver-cover.jpg"
        meta={[
          { label: 'Role', value: 'UI/UX Designer' },
          { label: 'Platform', value: 'Delivery App' },
          { label: 'Focus', value: 'Product Design' },
          { label: 'Year', value: '2024' },
        ]}
      />

      <CaseStudySection number="01" title="Product Problem">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          WeDeliver needed a clearer structure for how users track orders, manage deliveries, and
          communicate with drivers throughout the delivery process.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="UX Structure">
        <PlaceholderVisual label="Information architecture — replace with real asset" />
      </CaseStudySection>

      <CaseStudySection number="03" title="User Flow">
        <PlaceholderVisual label="User flow — replace with real asset" />
      </CaseStudySection>

      <CaseStudySection number="04" title="UI & Components">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <PlaceholderVisual label="Buttons & Inputs" ratio="aspect-square" />
          <PlaceholderVisual label="Cards" ratio="aspect-square" />
          <PlaceholderVisual label="Navigation" ratio="aspect-square" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="05" title="Key Screens">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PlaceholderVisual label="Order Tracking Screen" />
          <PlaceholderVisual label="Checkout Flow" />
        </div>
      </CaseStudySection>

      <CaseStudySection number="06" title="Interaction">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Micro-interactions such as live order-status updates and map-based tracking were
          designed to keep users informed without adding friction.
        </p>
        <div className="mt-8">
          <PlaceholderVisual label="Device / browser composition" />
        </div>
      </CaseStudySection>

      <ProjectNavigation currentSlug="wedeliver" />
    </div>
  )
}

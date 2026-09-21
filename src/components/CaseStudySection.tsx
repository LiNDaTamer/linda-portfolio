import { ReactNode } from 'react'
import { FadeIn } from './AnimatedText'

export default function CaseStudySection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-paper/10 px-6 py-16 md:px-10">
      <FadeIn>
        <div className="mb-8 flex items-baseline gap-4">
          <span className="text-xs tracking-[0.2em] text-accent">{number}</span>
          <h2 className="text-2xl font-semibold tracking-tight text-paper md:text-3xl">{title}</h2>
        </div>
      </FadeIn>
      <FadeIn delay={0.08}>{children}</FadeIn>
    </section>
  )
}

export function PlaceholderVisual({ label, ratio = 'aspect-[16/9]' }: { label: string; ratio?: string }) {
  return (
    <div className={`flex ${ratio} w-full items-center justify-center rounded-sm border border-dashed border-paper/15 bg-neutral-950`}>
      <span className="text-xs tracking-[0.15em] text-muted">{label}</span>
    </div>
  )
}

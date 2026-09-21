import { FadeIn, RevealText } from './AnimatedText'

export default function CaseStudyHero({
  eyebrow,
  titleLines,
  subtitle,
  meta,
  coverImage,
}: {
  eyebrow: string
  titleLines: string[]
  subtitle: string
  meta: { label: string; value: string }[]
  coverImage: string
}) {
  return (
    <section className="px-6 pb-16 pt-36 md:px-10 md:pt-44">
      <p className="text-xs tracking-[0.25em] text-accent">{eyebrow}</p>
      <h1 className="mt-4 text-display-sm font-semibold tracking-tight text-paper">
        {titleLines.map((line, i) => (
          <RevealText key={line} delay={i * 0.08}>
            {line}
          </RevealText>
        ))}
      </h1>
      <FadeIn delay={0.2}>
        <p className="mt-5 max-w-xl text-lg text-muted">{subtitle}</p>
      </FadeIn>

      <FadeIn delay={0.3} className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-sm bg-neutral-900">
        <img
          src={coverImage}
          alt=""
          className="h-full w-full object-cover"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.opacity = '0'
          }}
        />
      </FadeIn>

      <FadeIn delay={0.35} className="mt-10 grid grid-cols-2 gap-8 border-t border-paper/10 pt-8 md:grid-cols-4">
        {meta.map((m) => (
          <div key={m.label}>
            <p className="text-xs tracking-[0.15em] text-muted">{m.label.toUpperCase()}</p>
            <p className="mt-2 text-sm text-paper">{m.value}</p>
          </div>
        ))}
      </FadeIn>
    </section>
  )
}

import { RevealText } from './AnimatedText'

export default function SectionHeading({
  eyebrow,
  lines,
  align = 'left',
}: {
  eyebrow?: string
  lines: string[]
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-display-sm font-semibold tracking-tight text-paper">
        {lines.map((line, i) => (
          <RevealText key={line} delay={i * 0.08}>
            {line}
          </RevealText>
        ))}
      </h2>
    </div>
  )
}

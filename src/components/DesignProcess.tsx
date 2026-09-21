import { FadeIn } from './AnimatedText'

const steps = [
  { n: '01', label: 'UNDERSTAND' },
  { n: '02', label: 'EXPLORE' },
  { n: '03', label: 'STRUCTURE' },
  { n: '04', label: 'DESIGN' },
  { n: '05', label: 'REFINE' },
  { n: '06', label: 'PROTOTYPE' },
]

export default function DesignProcess() {
  return (
    <div className="divide-y divide-paper/10 border-y border-paper/10">
      {steps.map((step, i) => (
        <FadeIn key={step.n} delay={i * 0.05}>
          <div className="group flex items-center justify-between px-1 py-6 transition-colors hover:px-4">
            <div className="flex items-baseline gap-6">
              <span className="text-xs tracking-[0.2em] text-accent">{step.n}</span>
              <span className="text-xl font-medium tracking-tight text-paper md:text-2xl">{step.label}</span>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}

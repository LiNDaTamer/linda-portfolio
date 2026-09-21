import { ArrowUpRight } from 'lucide-react'
import { RevealText, FadeIn } from '../components/AnimatedText'
import { siteConfig } from '../data/config'

export default function Contact() {
  const links = [
    { label: 'Email', value: siteConfig.email, href: siteConfig.links.email },
    { label: 'LinkedIn', value: 'linkedin.com/in/linda-tamer', href: siteConfig.links.linkedin },
    { label: 'Behance', value: 'behance.net/lindatamer', href: siteConfig.links.behance },
  ]

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-36 md:px-10">
      <h1 className="text-display-sm font-semibold tracking-tight text-paper">
        <RevealText delay={0.05}>LET'S MAKE</RevealText>
        <RevealText delay={0.15}>SOMETHING</RevealText>
        <RevealText delay={0.25}>MEANINGFUL.</RevealText>
      </h1>

      <FadeIn delay={0.4} className="mt-8">
        <a
          href={siteConfig.links.email}
          data-cursor="hover"
          className="inline-flex items-center gap-3 border-b border-paper/30 pb-2 text-lg tracking-wide hover:border-accent hover:text-accent"
        >
          Let's talk <ArrowUpRight size={18} />
        </a>
      </FadeIn>

      <FadeIn delay={0.5} className="mt-20 grid grid-cols-1 gap-6 border-t border-paper/10 pt-10 sm:grid-cols-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            data-cursor="hover"
            className="group"
          >
            <p className="text-xs tracking-[0.2em] text-muted">{link.label.toUpperCase()}</p>
            <p className="mt-2 flex items-center gap-2 text-base text-paper transition-colors group-hover:text-accent">
              {link.value}
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </p>
          </a>
        ))}
      </FadeIn>
    </div>
  )
}

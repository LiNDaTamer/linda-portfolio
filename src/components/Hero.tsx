import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { RevealText } from './AnimatedText'

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-10 pt-32 md:px-10">
      <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="text-display font-semibold tracking-tight text-paper">
            <RevealText delay={0.1}>LINDA</RevealText>
            <RevealText delay={0.22}>TAMER</RevealText>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-lg text-muted"
          >
            I turn complex ideas into clear, thoughtful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <button
              onClick={scrollToWork}
              data-cursor="hover"
              className="group inline-flex items-center gap-3 border-b border-paper/30 pb-2 text-sm font-medium tracking-[0.15em] transition-colors hover:border-accent hover:text-accent"
            >
              VIEW MY WORK
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:justify-self-end md:max-w-sm"
        >
          <img
            src="/images/linda-portrait.jpg"
            alt="Portrait of Linda Tamer"
            className="h-full w-full object-cover grayscale"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = 'none'
              const parent = (e.target as HTMLImageElement).parentElement
              if (parent) parent.classList.add('bg-neutral-900')
            }}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-5">
            <span className="text-xs tracking-[0.2em] text-paper/70">UI/UX DESIGNER</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mt-16 flex items-center justify-between text-xs tracking-[0.2em] text-muted"
      >
        <span>MANSOURA, EGYPT</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          SCROLL
        </motion.span>
      </motion.div>
    </section>
  )
}

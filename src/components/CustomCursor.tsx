import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorVariant = 'default' | 'hover' | 'view'

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [label, setLabel] = useState('VIEW')
  const [isTouch, setIsTouch] = useState(true)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)
  const frame = useRef(0)

  useEffect(() => {
    const touch = window.matchMedia('(hover: hover) and (pointer: fine)').matches === false
    setIsTouch(touch)
    if (touch) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)

      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        const target = e.target as HTMLElement
        const viewEl = target.closest('[data-cursor="view"]')
        const exploreEl = target.closest('[data-cursor="explore"]')
        const hoverEl = target.closest('a, button, [data-cursor="hover"]')

        if (viewEl) {
          setVariant('view')
          setLabel('VIEW')
        } else if (exploreEl) {
          setVariant('view')
          setLabel('EXPLORE')
        } else if (hoverEl) {
          setVariant('hover')
        } else {
          setVariant('default')
        }
      })
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (isTouch) return null

  const size = variant === 'view' ? 76 : variant === 'hover' ? 44 : 14

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full mix-blend-difference md:flex"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: '#f5f2ec',
      }}
      transition={{ type: 'spring', damping: 26, stiffness: 320 }}
    >
      {variant === 'view' && (
        <span className="text-[11px] font-medium tracking-[0.15em] text-ink">{label}</span>
      )}
    </motion.div>
  )
}

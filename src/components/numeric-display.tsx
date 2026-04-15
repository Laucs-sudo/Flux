import { motion, useSpring, useTransform, useMotionValue, useVelocity, AnimatePresence, LayoutGroup } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface NumericDisplayProps {
  value: number | string
  className?: string
  speed?: number
}

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const SLOT_HEIGHT_EM = 1.08

export function NumericDisplay({
  value,
  className,
  speed = 1,
}: NumericDisplayProps) {
  const valueStr = String(value)
  const digits = valueStr.split("")

  return (
    <div
      className={cn(
        "flex tabular-nums select-none items-center justify-center font-bold tracking-tighter leading-none text-6xl sm:text-8xl md:text-9xl",
        className
      )}
      role="img"
      aria-label={valueStr}
    >
      <LayoutGroup>
        <AnimatePresence mode="popLayout" initial={false}>
          {digits.map((char, i) => {
            const isDigit = !isNaN(parseInt(char))
            const key = `digit-${i}-${isDigit ? "d" : char}`

            return (
              <motion.div
                layout
                key={key}
                initial={{ opacity: 0, x: 8, filter: "blur(3px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -8, filter: "blur(3px)" }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative overflow-hidden flex items-center justify-center h-[1.1em] w-[0.68em]"
              >
                {isDigit ? (
                  <DigitColumn digit={parseInt(char)} speed={speed} />
                ) : (
                  <span>{char}</span>
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  )
}

function DigitColumn({ digit, speed }: { digit: number; speed: number }) {
  const targetDigit = useMotionValue(digit)

  const springDigit = useSpring(targetDigit, {
    stiffness: 250 / speed,
    damping: 24,
    mass: 1 * speed,
  })

  useEffect(() => {
    targetDigit.set(digit)
  }, [digit, targetDigit])

  const velocity = useVelocity(springDigit)

  const blur = useTransform(velocity, (v) => {
    const absV = Math.abs(v)
    if (absV < 0.2) return 0
    return Math.min(absV * 0.7, 2.5)
  })

  const scaleY = useTransform(velocity, (v) => {
    const absV = Math.abs(v)
    return 1 + Math.min(absV * 0.05, 0.08)
  })

  const opacity = useTransform(velocity, (v) => {
    const absV = Math.abs(v)
    return 1 - Math.min(absV * 0.07, 0.16)
  })

  const translateY = useTransform(springDigit, (val) => `-${val * SLOT_HEIGHT_EM}em`)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        style={{
          y: translateY,
          filter: useTransform(blur, (b) => `blur(${b}px)`),
          scaleY,
          opacity,
        }}
        className="absolute top-0 left-0 flex w-full flex-col items-center"
      >
        {DIGITS.map((d) => (
          <div
            key={d}
            className="flex items-center justify-center leading-none"
            style={{ height: `${SLOT_HEIGHT_EM}em` }}
          >
            {d}
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  )
}

// Default export for convenience
export default NumericDisplay


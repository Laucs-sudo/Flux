import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMemo } from "react"

interface NumericDisplayProps {
  value: number | string
  className?: string
  isCountingDown?: boolean
  speed?: number
}

export function NumericDisplay({
  value,
  className,
  isCountingDown = false,
  speed = 1,
}: NumericDisplayProps) {
  const displayDigits = useMemo(() => {
    const digits = String(value).split("")
    return digits.map((digit, i) => ({
      digit,
      id: `${i}-${digit}`,
    }))
  }, [value])

  return (
    <div
      className={cn("flex tabular-nums overflow-hidden select-none", className)}
      role="img"
      aria-label={String(value)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {displayDigits.map(({ digit, id }, i) => (
          <motion.span
            key={id}
            layout
            aria-hidden="true"
            initial={{
              y: isCountingDown ? -20 : 20,
              opacity: 0,
              filter: "blur(4px)",
              scale: 0.8,
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              y: isCountingDown ? 20 : -20,
              opacity: 0,
              filter: "blur(4px)",
              scale: 0.6,
              transition: {
                duration: 0.15 * speed,
                ease: "easeIn",
              },
            }}
            transition={{
              type: "spring",
              stiffness: 400 / speed,
              damping: 25,
              mass: 0.8 * speed,
              delay: i * 0.025 * speed,
            }}
            className="inline-block min-w-[1ch] relative"
          >
            {digit}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
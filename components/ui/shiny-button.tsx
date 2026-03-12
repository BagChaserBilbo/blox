"use client"

import React from "react"
import { motion, type MotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

interface ShinyButtonProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative cursor-pointer rounded-lg border border-ice-blue bg-ice-blue px-6 py-2 font-medium backdrop-blur-xl shadow-[0_2px_8px_rgba(200,222,255,0.4),0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(200,222,255,0.5),0_2px_6px_rgba(0,0,0,0.06)] dark:bg-ice-blue/15 dark:border-ice-blue/25 dark:shadow-[0_2px_10px_rgba(200,222,255,0.1)] dark:hover:shadow-[0_4px_24px_rgba(200,222,255,0.2)]",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative block size-full text-sm tracking-wide text-near-black/80 uppercase dark:font-light dark:text-white/90"
        style={{
          maskImage:
            "linear-gradient(-75deg,#6CB0F0 calc(var(--x) + 20%),transparent 30%),#6CB0F0 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0),",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0),",
          backgroundImage:
            "linear-gradient(-75deg,rgba(108,176,240,0.1) calc(var(--x)+20%),rgba(108,176,240,0.5) calc(var(--x)+25%),rgba(108,176,240,0.1) calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </motion.button>
  )
})

ShinyButton.displayName = "ShinyButton"

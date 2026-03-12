'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Detect mobile: skip heavy 3D on small screens
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isMobile || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isMobile])

  // Mobile: show lightweight gradient placeholder instead of 4MB 3D scene
  if (isMobile) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-ice-blue/40 via-blox-blue/20 to-mid-blue/30 dark:from-blox-blue/20 dark:via-mid-blue/10 dark:to-ice-blue/5 animate-pulse" />
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Spline scene={scene} className="w-full h-full" />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      )}
    </div>
  )
}

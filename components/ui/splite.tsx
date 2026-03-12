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

  // Mobile: show logo instead of 4MB 3D scene
  if (isMobile) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <img
          src="/blox_logo_final.png"
          alt="Blox Studio"
          className="w-3/5 h-auto dark:invert"
        />
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

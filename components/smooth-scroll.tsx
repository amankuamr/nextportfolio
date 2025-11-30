"use client"

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export default function SmoothScroll() {
    const pathname = usePathname()
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        lenisRef.current = new Lenis()

        function raf(time: number) {
            lenisRef.current?.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenisRef.current?.destroy()
        }
    }, [])

    useEffect(() => {
        // Scroll to top on pathname change
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0)
        }
    }, [pathname])

    return null
}
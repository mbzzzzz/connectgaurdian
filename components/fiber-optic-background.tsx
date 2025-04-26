"use client"

import { useEffect, useRef } from "react"

export function FiberOpticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Fiber optic line class
    class FiberLine {
      x: number
      y: number
      length: number
      angle: number
      width: number
      speed: number
      color: string
      opacity: number
      pulseSpeed: number
      pulsePhase: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.length = Math.random() * 150 + 100
        this.angle = Math.random() * Math.PI * 2
        this.width = Math.random() * 2 + 1
        this.speed = (Math.random() * 0.5 + 0.1) * (Math.random() > 0.5 ? 1 : -1)

        // Use brand colors with varying opacity
        const colors = [
          `rgba(10, 77, 166, ${Math.random() * 0.5 + 0.3})`, // Guardian Blue
          `rgba(0, 200, 83, ${Math.random() * 0.5 + 0.3})`, // Pulse Green
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.3
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      draw(time: number) {
        if (!ctx) return

        // Calculate pulse effect
        const pulse = Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.5 + 0.5
        const currentOpacity = this.opacity * (0.5 + pulse * 0.5)

        // Draw the fiber line
        const endX = this.x + Math.cos(this.angle) * this.length
        const endY = this.y + Math.sin(this.angle) * this.length

        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY)
        gradient.addColorStop(0, this.color.replace(/[\d.]+\)$/, "0)"))
        gradient.addColorStop(0.5, this.color.replace(/[\d.]+\)$/, `${currentOpacity})`))
        gradient.addColorStop(1, this.color.replace(/[\d.]+\)$/, "0)"))

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = this.width
        ctx.lineCap = "round"
        ctx.stroke()

        // Draw glow effect
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.lineWidth = this.width * 3
        ctx.globalAlpha = 0.1 * pulse
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      update() {
        this.angle += this.speed / 100

        // Keep fibers within canvas bounds
        if (this.x < -this.length) this.x = canvas.width + this.length
        if (this.x > canvas.width + this.length) this.x = -this.length
        if (this.y < -this.length) this.y = canvas.height + this.length
        if (this.y > canvas.height + this.length) this.y = -this.length
      }
    }

    // Create fiber lines
    const fiberCount = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 50)
    const fibers: FiberLine[] = []

    for (let i = 0; i < fiberCount; i++) {
      fibers.push(new FiberLine())
    }

    // Animation loop
    let animationId: number
    const lastTime = 0

    const animate = (time: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update all fibers
      fibers.forEach((fiber) => {
        fiber.draw(time / 1000)
        fiber.update()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 -z-10"
    />
  )
}

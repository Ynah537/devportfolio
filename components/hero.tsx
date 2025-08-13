"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Grid background pattern */}
          <div className="h-full w-full bg-grid-pattern-light dark:bg-grid-pattern-dark" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">Virgilyn Tamayo</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">Junior Software Engineer</h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
           Results-driven Engineering Professional with expertise in full-stack development, database management, and system integration. Skilled in delivering high-quality technical solutions through collaboration with cross-functional teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#experience">View My Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

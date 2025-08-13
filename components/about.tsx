"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Junior Software Engineer with experience in building full-stack web applications, integrating
                APIs, and managing relational databases. Skilled in SQL, data processing, and creating
                interactive dashboards to visualize information for decision-making. Adept at collaborating
                with cross-functional teams to develop efficient and user-friendly systems. Seeking to apply
                technical expertise and analytical skills to support database-driven marketing initiatives and
                operational analytics.
              </motion.p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

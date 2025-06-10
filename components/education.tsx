"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Engineering
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">Bohol Island State University | 2020-2024</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 mt-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Thesis</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      "Non-Destructive Fruit Identification and Ripeness Classification using NIRS"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

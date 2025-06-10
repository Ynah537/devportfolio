"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "IoT Device Management Platform (Honda Project)",
      role: "Frontend & Backend Developer",
      description: [
        "Built a responsive web app for real-time IoT device monitoring and management.",
        "Developed user/admin dashboards and ensured seamless hardware-data integration.",
      ],
    },
    {
      title: "Reservation Booking System",
      role: "Frontend Developer",
      description: ["Created a slot-based booking interface with calendar view, validations, and mobile support."],
    },
    {
      title: "Web Scraping & PDF Export Tool",
      role: "Full-stack Developer",
      description: [
        "Developed a tool to scrape website data and generate structured PDF reports using headless browsers.",
      ],
    },
    {
      title: "Slack Notification Crawler",
      role: "Full-stack Developer",
      description: [
        "Built a crawler and integrate AI that monitors websites and sends real-time alerts to Slack channels.",
      ],
    },
    {
      title: "Task Management Kanban Board",
      role: "Frontend and Backend Developer",
      description: [
        "Designed and implemented a drag-and-drop Kanban board with real-time updates and task tracking.",
        "Integrate AI to analyze sprint insights.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Junior Software Engineer</h3>
            <span className="mx-2 text-gray-500 dark:text-gray-400">|</span>
            <p className="text-gray-600 dark:text-gray-400">Alphaus Inc. - Japan Based</p>
            <span className="mx-2 text-gray-500 dark:text-gray-400">|</span>
            <p className="text-gray-600 dark:text-gray-400">May 2024 - Present</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2">
                    <span className="text-xl text-gray-900 dark:text-white">{exp.title}</span>
                    <Badge variant="outline" className="w-fit">
                      {exp.role}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

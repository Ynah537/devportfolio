"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Uni-One Honda Project",
      role: "Full-Stack Developer",
      period: "May 2024 – March 2025",
      technologies: ["React.js", "Next.js", "Chakra UI", "TypeScript", "NestJS", "Prisma", "Cron Job", "Apollo GraphQL",
      "PostgreSQL","RESTful APIs", "Chakra UI", "Redux (Redux Toolkit)", "Zustand", "Tailwind CSS", "Jest"],
      description: [
        "Built a responsive web user application for real-time IoT device monitoring and management.",
        "Implemented user registration and QR code scanning to enable riders to access and use Uni-One devices.",
        "Developed Admin Dashboard to manage user data, reservations, and system records.",
        "Developed Manager Dashboard to track IoT device data in real time and visualize device locations on an interactive map.",
        "Designed and implemented a Reservation Booking System with slot-based booking validation logic and mobile-friendly UI for end users."
      ],
    },
    {
      title: "Web Scraping & PDF Export Tool",
      role: "Full-Stack Developer",
      period: "April 2025 – July 2025",
      technologies: ["React.js", "Next.js", "Chakra UI", "TypeScript"],
      description: [
        "Developed a web application to scrape website data and generate structured PDF reports.",
        "Integrated AI-based content parsing to extract and summarize relevant information."
      ],
    },
    {
      title: "Slack Notification Crawler",
      role: "Full-Stack Developer",
      period: "April 2025 – July 2025",
      technologies: ["React.js", "Next.js", "NestJS", "TypeScript", "Tailwind CSS", "Prisma", "Cron Job",],
      description: [
        "Built a crawler that monitors websites for changes or updates.",
        "Integrated AI and Slack APIs to send real-time alerts to designated Slack channels."
      ],
    },
    {
      title: "Task Management Kanban Board",
      role: "Full-Stack Developer",
      period: "April 2025 – July 2025",
      technologies: ["React.js", "Next.js", "NestJS", "Prisma", "Tailwind CSS", "Cron Job", "PostgreSQL","RESTful APIs", "Jest"],
      description: [
        "Designed and implemented a drag-and-drop Kanban board with real-time updates.",
        "Enabled task tracking and sprint organization.",
        "Integrated AI-driven sprint insights analysis for performance and productivity evaluation."
      ],
    },
    {
      title: "Alphaus Octo Product",
      role: "Frontend Developer",
      period: "August 2025 – November 2025",
      technologies: ["Vue", "Zustand","Pinia",],
      description: [
        "Developed frontend features for the Octo cloud optimization platform.",
        "Built UI components for cloud resource visualization and optimization insights.",
        "Focused on performance, usability, and data-driven dashboards related to cloud infrastructure."
      ],
    },
    {
      title: "Quality Assurance Engineer",
      role: "QA Engineer",
      period: "December 2025 – Present",
      technologies: ["Google Cloud Pub/Sub", "Google Cloud Spanner", "Slack API", "Go"],
      description: [
        "Implementing CI/CD pipelines to support automated testing workflows.",
        "Ensuring product quality standards across company applications.",
        "Developed a real-time test reporting system where automated test results are published to Google Cloud Pub/Sub, persisted in Google Cloud Spanner for scalable analysis, visualized through a monitoring dashboard, and test statuses are automatically sent to integrated Slack channels for real-time team notifications."
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
          <div className="flex items-center justify-center mb-8 flex-wrap gap-2 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Junior Software Engineer</h3>
            <span className="text-gray-500 dark:text-gray-400">|</span>
            <p className="text-gray-600 dark:text-gray-400">Alphaus Inc. - Japan Based</p>
            <span className="text-gray-500 dark:text-gray-400">|</span>
            <p className="text-gray-600 dark:text-gray-400">May 2024 - Present</p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                    {exp.role} | {exp.period}
                  </CardDescription>
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

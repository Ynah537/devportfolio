"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Unione (Honda Project)",
      role: "Full-stack Developer",
      technologies: ["React.js", "Next.js", "Chakra UI", "TypeScript", "NestJS", "Prisma"],
      description: [
        "Developed a responsive web application that allows users to create accounts, generate unique barcodes, and register via barcode scanning.",
        "Created an admin dashboard to manage users, view ride assessments, and track historical ride data with filtering and analytics features.",
        "Built a manager dashboard with an interactive map that displays real-time device tracking (latitude, longitude), battery status, and geolocation updates using IoT data.",
        "Implemented role-based access for users, admins, and managers to manage reservations, view statistics, and enforce slot limits dynamically.",
        "Integrated seamless communication between frontend and backend, ensuring real-time updates and robust device-user mapping."
      ],
    },
    {
      title: "Reservation Booking System (Honda Project)",
      role: "Full-stack Developer",
      technologies: ["React.js", "Next.js", "Chakra UI", "TypeScript", "NestJS", "Prisma"],
      description: [
        "Developed a slot-based reservation system where users can book ride schedules with mobile responsiveness and form validation.",
        "Integrated SendGrid for automated email confirmations and reminders."
      ],
    },
    {
      title: "Web Scraping & PDF/CSV Export Tool",
      role: "Full-stack Developer",
      technologies: ["React.js", "Next.js", "Chakra UI", "TypeScript"],
      description: [
        "Built a tool that accepts website URLs, scrapes structured content using Puppeteer, and parses the data with OpenAI for enhanced formatting.",
        "Exported parsed results into downloadable CSV and auto-generated PDF reports for business insights.",
        "Implemented validation, progress feedback, and error handling for a smoother scraping experience."
      ],
    },
    {
      title: "Slack Notification Crawler",
      role: "Full-stack Developer",
      technologies: ["React.js", "Next.js", "NestJS", "TypeScript", "Tailwind CSS", "Prisma", "Cron Job"],
      description: [
        "Created a background crawler using JSDOM that monitors website changes by parsing HTML content and comparing snapshots.",
        "Integrated OpenAI to interpret scraped data and extract key changes or summaries from site updates.",
        "Sent real-time notifications to designated Slack channels when updates were detected, improving team awareness.",
        "Integrated cron job scheduling to automatically run crawling and content comparison at defined intervals."
      ],
    },
    {
      title: "Task Management Kanban Board",
      role: "Full-stack Developer",
      technologies: ["React.js", "Next.js", "NestJS", "Prisma", "Tailwind CSS", "Cron Job"],
      description: [
        "Designed and implemented a real-time drag-and-drop Kanban board for task tracking across multiple teams and spaces.",
        "Integrated Slack to send notifications on task updates and status changes.",
        "Incorporated OpenAI to analyze sprint progress and generate AI-powered sprint insights, automatically detecting blocked or stuck tasks across teams.",
        "Implemented cron job automation to trigger AI-powered batch summarization and sprint insight generation at scheduled times."
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
                    {exp.role}
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

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Mapbox",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "REST API",
      "PHP",
      "MySQL",
      "Firebase",
      "Go"
    ],
  },
  {
    title: "Design & Prototyping",
    skills: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "User Flows",
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "Git",
      "Agile Development",
      "XAMPP",
      "Web Scraping",
      "API Integration",
      "IoT Integration",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Collaboration and Teamwork",
      "Documentation",
      "Problem Solving",
      "Time Management"
    ],
  },
  {
    title: "Communication",
    skills: [
      "English",
      "Tagalog",
      "Cebuano",
    ],
  },
  {
    title: "Certifications",
    skills: [
      "AWS Certified Cloud Practitioner",
      "Agile & Scrum 101 (Completed Training)",
    ],
  },
]


  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

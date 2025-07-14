"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const collegeProjects = [
    {
      title: "Bohol Heritage Map Website",
      description: "An interactive map of Bohol showcasing tourist attractions with filterable categories.",
      role: "Full Stack Developer & UI Designer",
      details: [
        "Designed an interactive map using Mapbox API to display Bohol's attractions.",
        "Implemented category filters using JavaScript for a better user experience.",
        "Built using HTML, CSS, JavaScript, and PHP with XAMPP for local database management."
      ],
      technologies: ["Mapbox", "HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
      image: "/placeholder.svg",
    },
    {
      title: "Inventory System",
      description: "A desktop application to track sales and inventory in real-time.",
      role: "Developer & UI Designer",
      details: [
        "Developed a desktop inventory system to monitor stock levels and sales.",
        "Managed item data including name, description, price, and quantity using XAMPP.",
        "Designed a user-friendly UI for efficient stock tracking and updates."
      ],
      technologies: ["C#", "XAMPP", "MySQL"],
      image: "/placeholder.svg",
    },
    {
      title: "StudyBuddy Application",
      description: "A platform to find and apply for tutors online.",
      role: "UI/UX Designer & Developer",
      details: [
        "Designed the user interface using Figma for both students and tutors.",
        "Developed core app features enabling tutor search and applications.",
      ],
      technologies: ["Figma", "Kotlin", "Firebase"],
      image: "/placeholder.svg",
    },
    {
      title: "On the Job Training / Internship",
      description: "Projects and learnings during internship including cloud computing and Docker.",
      role: "Intern Developer",
      details: [
        "Worked on concurrency, Docker, virtual machines, databases, and GCP.",
        "Implemented Pub/Sub system to send and receive service pricing data.",
        "Designed a UI for a website as part of a final project presentation."
      ],
      technologies: ["Docker", "GCP", "Pub/Sub", "HTML", "CSS", "JavaScript", "Go"],
      image: "/placeholder.svg",
    },
  ];

  const personalProjects = [
    {
      title: "BusTrek",
      description: "A real-time bus tracking web application that helps commuters track the location of buses in their area.",
      role: "Solo Developer & UI/UX Designer",
      details: [
        "Developed a web application for commuters to track real-time bus locations and routes.",
        "Implemented live GPS tracking to show current bus positions on an interactive map.",
        "Created user-friendly interface for easy navigation and bus schedule information.",
        "Built with responsive design to work seamlessly on mobile and desktop devices.",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      demoLink: "https://bus-tracker-three.vercel.app/?fbclid=IwY2xjawLiYbBleHRuA2FlbQIxMQABHq3XB58dcUmVr7CJ98VGefwiR7X0ShgyJPYf7AgWc3KA5F61k8SBlrz6cppb_aem_X8l8rTCdqkeITJeIxAJ4_w",
      repoLink: "https://github.com/Ynah537/Bus-Tracker.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Personal Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Featured Projects</h3>
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                        {project.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="p-0 flex gap-4">
                      <Button asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Repository
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* College Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Academic Projects</h3>
            {collegeProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                        {project.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Online Grocery Store Platform",
      description: "A full-featured e-commerce site with product filtering, cart, and checkout functionality.",
      role: "Solo Developer & UI/UX Designer",
      details: [
        "Designed in Figma and developed a full-featured e-commerce site with product filtering, cart, and checkout.",
        "Focused on responsive design and seamless shopping experience across devices.",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      repoLink: "#",
    },
  ]

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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
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
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

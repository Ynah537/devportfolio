import type { Metadata } from "next"

const name = "Virgilyn A. Tamayo"
const role = "Junior Software Engineer"

export const siteConfig = {
  name,
  role,
  description: `${name} is a ${role.toLowerCase()} specializing in React and TypeScript`,
  url: "https://yourportfolio.com",
  ogImage: "https://yourportfolio.com/og.jpg",
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

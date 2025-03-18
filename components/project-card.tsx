import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  name: string
  description: string
  tech: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Randomly select a color for each project card
  const borderColors = [
    "border-cyan-700",
    "border-purple-700",
    "border-pink-700",
    "border-orange-700",
    "border-red-700",
    "border-yellow-700",
  ]
  const titleColors = [
    "text-cyan-400",
    "text-purple-400",
    "text-pink-400",
    "text-orange-400",
    "text-red-400",
    "text-yellow-400",
  ]
  const borderColorIndex = Math.floor(project.name.length % borderColors.length)
  const titleColorIndex = Math.floor((project.name.length + 1) % titleColors.length)

  return (
    <div
      className={`bg-gray-900 bg-opacity-50 border ${borderColors[borderColorIndex]} hover:border-green-500 transition-all duration-300 p-4 h-full flex flex-col`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className={`text-xl font-bold ${titleColors[titleColorIndex]}`}>{project.name}</h3>
        <Link href={project.link} className="text-green-400 hover:text-green-300">
          <Github className="w-5 h-5" />
        </Link>
      </div>
      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => {
            const techColors = [
              "bg-red-900 text-red-200",
              "bg-cyan-900 text-cyan-200",
              "bg-purple-900 text-purple-200",
              "bg-orange-900 text-orange-200",
            ]
            return (
              <span
                key={index}
                className={`text-xs px-2 py-1 ${techColors[index % techColors.length]} border border-gray-800`}
              >
                {tech}
              </span>
            )
          })}
        </div>
        <Link
          href={project.link}
          className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
        >
          <span>VIEW_PROJECT</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}


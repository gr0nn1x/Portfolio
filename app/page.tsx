import Link from "next/link"
import { Github, Mail, User } from "lucide-react"
import ProjectCard from "@/components/project-card"
import CrtEffect from "@/components/crt-effect"
import Terminal from "@/components/terminal"

export default function Home() {
  // Updated with actual GitHub projects
  const projects = [
    {
      name: "KartickyNaSite",
      description: "A web application for quick learning",
      tech: ["Next.js", "TypeScript", "CSS"],
      link: "https://github.com/gr0nn1x/kartickyNaSite",
    },
    {
      name: "VlkavaCrawler",
      description: "An ASCII themed web game",
      tech: ["TypeScript", "Next.js"],
      link: "https://github.com/gr0nn1x/vlkavacrawler",
    },
    {
      name: "BarbellBuddy",
      description: "Fitness tracking application for weightlifting and workout routines",
      tech: ["React Native", "JavaScript", "PostgreSQL", "Socket.io"],
      link: "https://github.com/gr0nn1x/BarbellBuddy",
    },
  ]

  return (
    <CrtEffect>
      <main className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 border-b border-purple-700 pb-4">
            <div className="glitch-text text-4xl md:text-6xl font-bold mb-2 text-cyan-400" data-text="GR0NN1X_TERMINAL">
              GR0NN1X_TERMINAL
            </div>
            <p className="text-orange-500 text-lg md:text-xl">FULL_STACK_DEV.exe</p>
          </header>

          <Terminal>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600 glitch-text" data-text="ABOUT::SYSTEM">
                ABOUT::SYSTEM
              </h2>
              <div className="bg-gray-900 bg-opacity-50 p-4 border border-cyan-700 mb-6">
                <p className="mb-4 leading-relaxed text-yellow-300">
                  Full stack developer with expertise in modern web technologies. I love making clean and easy to use
                  applications.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Link
                    href="https://github.com/gr0nn1x"
                    className="flex items-center gap-2 px-4 py-2 bg-red-900 hover:bg-red-800 text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GITHUB</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-900 hover:bg-cyan-800 text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>CONTACT</span>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-800 hover:bg-purple-700 text-white transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>PROFILE</span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 glitch-text"
                data-text="PROJECTS::LOADED"
              >
                PROJECTS::LOADED
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 text-purple-500 glitch-text"
                data-text="SKILLS::ARSENAL"
              >
                SKILLS::ARSENAL
              </h2>
              <div className="bg-gray-900 bg-opacity-50 p-4 border border-pink-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Git",
                  ].map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="px-3 py-2 bg-gray-800 text-center border border-cyan-700 hover:border-orange-500 transition-colors">
                        <span
                          className={`text-${["yellow", "cyan", "pink", "green", "orange", "purple"][index % 6]}-400`}
                        >
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Terminal>

          <footer className="mt-12 pt-6 border-t border-purple-700 text-center text-sm">
            <p className="text-gray-500">© {new Date().getFullYear()} GR0NN1X_SYSTEMS</p>
            <p className="text-cyan-600 mt-2">OZEN-OS v1.0.2</p>
          </footer>
        </div>
      </main>
    </CrtEffect>
  )
}


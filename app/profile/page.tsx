import Link from "next/link"
import { ArrowLeft, Calendar, Code, GraduationCap, Home, Puzzle, User } from "lucide-react"
import CrtEffect from "@/components/crt-effect"
import Terminal from "@/components/terminal"

export default function ProfilePage() {
  return (
    <CrtEffect>
      <main className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 border-b border-purple-700 pb-4">
            <div className="glitch-text text-4xl md:text-6xl font-bold mb-2 text-cyan-400" data-text="PROFILE::DATA">
              PROFILE::DATA
            </div>
            <p className="text-orange-500 text-lg md:text-xl">USER_INFORMATION.dat</p>
          </header>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK_TO_MAIN</span>
          </Link>

          <Terminal>
            <section className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 text-purple-500 glitch-text"
                data-text="PERSONAL::FILE"
              >
                PERSONAL::FILE
              </h2>

              <div className="bg-gray-900 bg-opacity-50 p-6 border border-yellow-700 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-blue-200 rounded-lg">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">František Tesařík</h3>
                    <p className="text-yellow-300">IT Student & Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Currently pursuing my education in Information Technology while working on various web and software
                  development projects. My passion for technology drives me to continuously learn and improve my skills.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 bg-opacity-50 p-6 border border-cyan-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-900 text-purple-200 rounded-lg">
                      <Code className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">Developer Experience</h3>
                      <div className="flex items-center gap-2 text-yellow-300">
                        <Calendar className="w-4 h-4" />
                        <span>Coding since 2020</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Started my programming journey in 2020, focusing on web development and constantly expanding my
                    skills in modern technologies. I have worked in, and even led multiple freelance teams of up to ten
                    people, but also done projects on my own.
                  </p>
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    <h4 className="text-pink-400 mb-2">Primary Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                      <li>Frontend Development</li>
                      <li>Backend Systems</li>
                      <li>Full Stack Applications</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 bg-opacity-50 p-6 border border-pink-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-orange-900 text-orange-200 rounded-lg">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-400">Education</h3>
                      <div className="flex items-center gap-2 text-green-300">
                        <Home className="w-4 h-4" />
                        <span>Mladá Boleslav</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Studied at Střední průmyslová škola in Mladá Boleslav, where I gained a strong foundation in
                    technical subjects and modern technologies. Currently continuing my education in Information
                    Technology.
                  </p>
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    <h4 className="text-cyan-400 mb-2">Key Learnings:</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                      <li>Technical Problem Solving</li>
                      <li>Engineering Fundamentals</li>
                      <li>Project Management</li>
                      <li>Software Development</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-900 bg-opacity-50 p-6 border border-orange-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-cyan-900 text-cyan-200 rounded-lg">
                    <Puzzle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">Interests & Hobbies</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-yellow-400 mb-2">Puzzle Solving</h4>
                    <p className="text-gray-300 mb-4">
                      I enjoy challenging my mind with various puzzles, from logic problems to complex riddles. This
                      passion for problem-solving translates directly to my approach to coding challenges.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-pink-400 mb-2">Mathematics</h4>
                    <p className="text-gray-300 mb-4">
                      Mathematics has always fascinated me, particularly applied mathematics and its real-world
                      applications. I find the logical structures and patterns in math to be both beautiful and
                      practical.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 text-red-500 glitch-text"
                data-text="CODING::PHILOSOPHY"
              >
                CODING::PHILOSOPHY
              </h2>
              <div className="bg-gray-900 bg-opacity-50 p-6 border border-green-700">
                <p className="text-cyan-300 mb-4 text-lg">
                  "There is no difference between real life and puzzles, life is just a network of small problems that
                  can, and must be solved"
                </p>
                <p className="text-gray-300">
                  I approach development with a focus on clean, maintainable code that solves real problems. My
                  background in mathematics and puzzle-solving helps me break down complex challenges into manageable
                  components. I do not fear Artificial Intelligence, it will, and already is a part of our everyday
                  life, and if we do not acclimate to it, we might as well give up.
                </p>
                <div className="mt-6 p-4 bg-gray-800 border-l-4 border-purple-500">
                  <p className="text-yellow-300">
                    Always learning, always improving, and always looking for the next interesting problem to solve.
                  </p>
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


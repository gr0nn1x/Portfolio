"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Send, Copy, Check } from "lucide-react"
import CrtEffect from "@/components/crt-effect"
import Terminal from "@/components/terminal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const mailtoLink = `mailto:fanyfany888@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${formState.subject}`,
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    )}`

    // Open default email client
    window.open(mailtoLink, "_blank")

    setStatus("success")

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setStatus("idle")
    }, 3000)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("fanyfany888@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <CrtEffect>
      <main className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 border-b border-purple-700 pb-4">
            <div
              className="glitch-text text-4xl md:text-6xl font-bold mb-2 text-cyan-400"
              data-text="CONTACT::PROTOCOL"
            >
              CONTACT::PROTOCOL
            </div>
            <p className="text-orange-500 text-lg md:text-xl">TRANSMISSION_SYSTEM.exe</p>
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
                className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 glitch-text"
                data-text="COMMUNICATION::CHANNEL"
              >
                COMMUNICATION::CHANNEL
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900 bg-opacity-50 p-6 border border-cyan-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-900 text-purple-200 rounded-lg">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pink-400">Direct Contact</h3>
                      <p className="text-yellow-300">Send a message directly to my inbox</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300">
                      Feel free to reach out with project inquiries, collaboration opportunities, or just to say hello!
                    </p>
                  </div>

                  <div className="p-4 bg-gray-800 border-l-4 border-green-500 mb-4">
                    <div className="flex items-center justify-between">
                      <p className="text-cyan-300 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>fanyfany888@gmail.com</span>
                      </p>
                      <Button variant="ghost" size="sm" onClick={copyEmail} className="text-gray-400 hover:text-white">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">I typically respond to messages within 24-48 hours.</p>

                  <div className="mt-6 p-4 bg-gray-800 border border-yellow-700">
                    <p className="text-yellow-300 text-sm mb-2">Direct Email Link:</p>
                    <Button
                      className="w-full bg-purple-900 hover:bg-purple-800"
                      onClick={() => window.open("mailto:fanyfany888@gmail.com", "_blank")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Open Email Client
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-900 bg-opacity-50 p-6 border border-pink-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Send Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-yellow-300 mb-1">
                        NAME
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-gray-200"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-yellow-300 mb-1">
                        EMAIL
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-gray-200"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-yellow-300 mb-1">
                        SUBJECT
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-gray-200"
                        placeholder="Message subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-yellow-300 mb-1">
                        MESSAGE
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 text-gray-200 min-h-[120px]"
                        placeholder="Your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-800 hover:bg-cyan-700 text-white flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>OPEN EMAIL CLIENT</span>
                    </Button>

                    <p className="text-gray-400 text-xs text-center mt-2">
                      This will open your default email application with the message pre-filled.
                    </p>

                    {status === "success" && (
                      <div className="p-3 bg-green-900 text-green-200 text-center">
                        Email client opened with your message!
                      </div>
                    )}
                  </form>
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


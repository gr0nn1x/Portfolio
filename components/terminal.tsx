"use client"

import { type ReactNode, useEffect, useState } from "react"

interface TerminalProps {
  children: ReactNode
}

export default function Terminal({ children }: TerminalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const lines = [
    "INITIALIZING SYSTEM...",
    "LOADING CORE MODULES...",
    "IS SOMEONE EVEN READING THIS LOL...",
    "ACCESSING DATA...",
    "RENDERING INTERFACE...",
    "SYSTEM READY.",
  ]

  const colors = [
    "text-green-500",
    "text-cyan-400",
    "text-purple-400",
    "text-yellow-300",
    "text-pink-400",
    "text-orange-400",
  ]

  useEffect(() => {
    // Simulate terminal boot sequence
    let lineIndex = 0
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        setCurrentLine(lineIndex)
        lineIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setIsVisible(true)
        }, 500)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="terminal">
      {!isVisible && (
        <div className="boot-sequence">
          {lines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="boot-line">
              <span className={colors[index % colors.length]}>[SYSTEM]</span> {line}
            </div>
          ))}
        </div>
      )}

      <div className={`terminal-content ${isVisible ? "visible" : "hidden"}`}>{children}</div>

      <style jsx>{`
        .terminal {
          position: relative;
          min-height: 300px;
        }
        
        .boot-sequence {
          font-family: monospace;
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid #1a5c1a;
        }
        
        .boot-line {
          margin-bottom: 0.5rem;
          animation: typeIn 0.5s steps(40, end);
        }
        
        .terminal-content {
          opacity: 0;
          transition: opacity 0.5s ease-in;
        }
        
        .terminal-content.visible {
          opacity: 1;
        }
        
        .terminal-content.hidden {
          display: none;
        }
        
        @keyframes typeIn {
          from { width: 0 }
          to { width: 100% }
        }
      `}</style>
    </div>
  )
}


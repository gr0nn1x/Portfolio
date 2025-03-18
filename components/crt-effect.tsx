"use client"

import { type ReactNode, useEffect, useState } from "react"

interface CrtEffectProps {
  children: ReactNode
}

export default function CrtEffect({ children }: CrtEffectProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [glitchIntensity, setGlitchIntensity] = useState(0)

  useEffect(() => {
    // Simulate terminal loading effect
    setIsLoaded(true)

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      const randomIntensity = Math.random() * 0.5
      setGlitchIntensity(randomIntensity)

      // Reset glitch after a short time
      setTimeout(() => {
        setGlitchIntensity(0)
      }, 150)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div
      className={`crt-wrapper ${isLoaded ? "loaded" : ""}`}
      style={{
        filter: `hue-rotate(${glitchIntensity * 360}deg) saturate(${1 + glitchIntensity})`,
      }}
    >
      {children}
      <style jsx global>{`
        .crt-wrapper {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .crt-wrapper::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 2;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }
        
        .crt-wrapper::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(18, 16, 16, 0.1);
          opacity: 0;
          z-index: 2;
          pointer-events: none;
          animation: flicker 0.15s infinite;
        }
        
        @keyframes flicker {
          0% { opacity: 0.27861; }
          5% { opacity: 0.34769; }
          10% { opacity: 0.23604; }
          15% { opacity: 0.90626; }
          20% { opacity: 0.18128; }
          25% { opacity: 0.83891; }
          30% { opacity: 0.65583; }
          35% { opacity: 0.67807; }
          40% { opacity: 0.26559; }
          45% { opacity: 0.84693; }
          50% { opacity: 0.96019; }
          55% { opacity: 0.08594; }
          60% { opacity: 0.20313; }
          65% { opacity: 0.71988; }
          70% { opacity: 0.53455; }
          75% { opacity: 0.37288; }
          80% { opacity: 0.71428; }
          85% { opacity: 0.70419; }
          90% { opacity: 0.7003; }
          95% { opacity: 0.36108; }
          100% { opacity: 0.24387; }
        }
        
        .glitch-text {
          position: relative;
          display: inline-block;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); transform: skew(0.85deg); }
          5% { clip: rect(70px, 9999px, 71px, 0); transform: skew(0.59deg); }
          10% { clip: rect(7px, 9999px, 92px, 0); transform: skew(0.94deg); }
          15% { clip: rect(91px, 9999px, 61px, 0); transform: skew(0.39deg); }
          20% { clip: rect(9px, 9999px, 26px, 0); transform: skew(0.67deg); }
          25% { clip: rect(31px, 9999px, 46px, 0); transform: skew(0.58deg); }
          30% { clip: rect(94px, 9999px, 80px, 0); transform: skew(0.68deg); }
          35% { clip: rect(87px, 9999px, 18px, 0); transform: skew(0.72deg); }
          40% { clip: rect(20px, 9999px, 78px, 0); transform: skew(0.73deg); }
          45% { clip: rect(66px, 9999px, 62px, 0); transform: skew(0.25deg); }
          50% { clip: rect(80px, 9999px, 52px, 0); transform: skew(0.66deg); }
          55% { clip: rect(75px, 9999px, 53px, 0); transform: skew(0.31deg); }
          60% { clip: rect(11px, 9999px, 59px, 0); transform: skew(0.68deg); }
          65% { clip: rect(81px, 9999px, 36px, 0); transform: skew(0.68deg); }
          70% { clip: rect(40px, 9999px, 31px, 0); transform: skew(0.56deg); }
          75% { clip: rect(1px, 9999px, 62px, 0); transform: skew(0.56deg); }
          80% { clip: rect(89px, 9999px, 80px, 0); transform: skew(0.71deg); }
          85% { clip: rect(82px, 9999px, 39px, 0); transform: skew(0.9deg); }
          90% { clip: rect(97px, 9999px, 2px, 0); transform: skew(0.2deg); }
          95% { clip: rect(73px, 9999px, 92px, 0); transform: skew(0.94deg); }
          100% { clip: rect(67px, 9999px, 95px, 0); transform: skew(0.49deg); }
        }
        
        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 65px, 0); transform: skew(0.3deg); }
          5% { clip: rect(51px, 9999px, 84px, 0); transform: skew(0.29deg); }
          10% { clip: rect(28px, 9999px, 15px, 0); transform: skew(0.33deg); }
          15% { clip: rect(30px, 9999px, 90px, 0); transform: skew(0.15deg); }
          20% { clip: rect(76px, 9999px, 4px, 0); transform: skew(0.61deg); }
          25% { clip: rect(38px, 9999px, 46px, 0); transform: skew(0.99deg); }
          30% { clip: rect(23px, 9999px, 11px, 0); transform: skew(0.4deg); }
          35% { clip: rect(98px, 9999px, 59px, 0); transform: skew(0.29deg); }
          40% { clip: rect(61px, 9999px, 2px, 0); transform: skew(0.67deg); }
          45% { clip: rect(72px, 9999px, 69px, 0); transform: skew(0.65deg); }
          50% { clip: rect(45px, 9999px, 64px, 0); transform: skew(0.5deg); }
          55% { clip: rect(87px, 9999px, 44px, 0); transform: skew(0.31deg); }
          60% { clip: rect(21px, 9999px, 54px, 0); transform: skew(0.98deg); }
          65% { clip: rect(20px, 9999px, 91px, 0); transform: skew(0.4deg); }
          70% { clip: rect(89px, 9999px, 99px, 0); transform: skew(0.56deg); }
          75% { clip: rect(4px, 9999px, 8px, 0); transform: skew(0.77deg); }
          80% { clip: rect(20px, 9999px, 20px, 0); transform: skew(0.16deg); }
          85% { clip: rect(51px, 9999px, 86px, 0); transform: skew(0.43deg); }
          90% { clip: rect(65px, 9999px, 87px, 0); transform: skew(0.98deg); }
          95% { clip: rect(38px, 9999px, 92px, 0); transform: skew(0.46deg); }
          100% { clip: rect(82px, 9999px, 31px, 0); transform: skew(0.06deg); }
        }
        
        @keyframes glitch-skew {
          0% { transform: skew(-2deg); }
          10% { transform: skew(1deg); }
          20% { transform: skew(0deg); }
          30% { transform: skew(0deg); }
          40% { transform: skew(-1deg); }
          50% { transform: skew(-1deg); }
          60% { transform: skew(0deg); }
          70% { transform: skew(1deg); }
          80% { transform: skew(0deg); }
          90% { transform: skew(0deg); }
          100% { transform: skew(-1deg); }
        }
      `}</style>
    </div>
  )
}


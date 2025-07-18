import * as React from "react"
import { cn } from "../../lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
<div
  className={cn(
    "w-full overflow-hidden pb-10 md:pb-0 mt-40 z-10",
    className
  )}
  {...props}
>
  <h1 className="text-black text-center md:py-20  text-4xl">
    Trusted by thousands of businesses worldwide
  </h1>

  {/* Centered and narrow container */}
  <div className="max-w-6xl mx-auto px-8">
    <div className="relative flex overflow-hidden md:py-5 py-20 max-w-[90vw] mx-auto">
      <div
        className={cn(
          "flex w-max animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" && "animate-marquee-reverse"
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  </div>
</div>

  )
}

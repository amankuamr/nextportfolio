"use client"

import { Marquee } from "@/components/shadcn-space/animations/marquee"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNodedotjs,
  SiMongodb,
  SiGit
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "VS Code", icon: VscCode, color: "#007ACC" }
]

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <Marquee className="[--duration:30s] [--gap:2rem] p-0" pauseOnHover>
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex-shrink-0 flex items-center justify-center w-16 h-16"
          >
            <tech.icon size={32} color={tech.color} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

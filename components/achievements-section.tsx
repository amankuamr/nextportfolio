"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Zap, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const achievements = [
  {
    title: "Pariksha Pe Charcha",
    description: "Participated in the national event 'Pariksha Pe Charcha' with the Prime Minister, focusing on exam stress management.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "UI/UX Recommendation Letter",
    description: "Received a recommendation letter in March for outstanding performance and contributions in UI/UX design.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Codestam Technologies Role",
    description: "UI/UX Designer & Web Developer at Codestam Technologies from June to September, working with real-life clients on various projects.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Plasmid UI/UX Internship",
    description: "Completed UI/UX internship at Plasmid in March, recognized for outstanding design solutions and user research.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "Tech Fest Leadership",
    description: "Led the graphics design team for Tech Pragati Tech Fest, creating branding and digital assets.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Google UX Certification",
    description: "Completed the Google UX Experience course, demonstrating strong skills in user experience design.",
    icon: <Zap className="w-6 h-6" />,
  }
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
            {"Achievements".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="inline-block hover:text-red-500 transition-colors duration-200"
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Milestones and accomplishments that define my journey in technology and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <Feature key={achievement.title} {...achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-500 group-hover/feature:bg-red-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
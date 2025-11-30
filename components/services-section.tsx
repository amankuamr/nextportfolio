"use client"

import { motion } from "framer-motion"
import { Code, Palette, Brush } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Web Development",
    description: "Building responsive, performant web applications with modern technologies.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that delight users.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Graphics Design",
    description: "Designing stunning visuals, logos, and marketing materials.",
    icon: <Brush className="w-6 h-6" />,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black" style={{ fontFamily: 'BitcountGridSingle' }}>
            {"My Skills".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="inline-block hover:text-red-500 transition-colors duration-200"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and creative capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
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
      animate={
        title === "UI/UX Design" || title === "Web Development" || title === "Graphics Design" ? { backgroundSize: '50%' } : {}
      }
      whileHover={
        title === "UI/UX Design" || title === "Web Development" || title === "Graphics Design" ? { backgroundSize: '60%', transition: { duration: 0.2 } } : {}
      }
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        index === 0 && "rounded-bl-2xl",
        index === 2 && "rounded-br-2xl",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
      style={
        title === "UI/UX Design" ? {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent 60%), url(/servicves/UI⁄UX.png)',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat'
        } : title === "Web Development" ? {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent 60%), url(/servicves/webdev.png)',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat'
        } : title === "Graphics Design" ? {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), transparent 60%), url(/servicves/graphic.png)',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat'
        } : {}
      }
    >
      {index < 3 && (
        <div className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none",
          index === 0 && "rounded-bl-2xl",
          index === 2 && "rounded-br-2xl"
        )} />
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

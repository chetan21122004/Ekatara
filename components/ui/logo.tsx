import { motion } from "framer-motion"

interface LogoProps {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }

  const textColors = {
    light: "text-white",
    dark: "text-gray-900",
  }

  const accentColors = {
    light: "from-red-400 to-red-500",
    dark: "from-red-600 to-red-700",
  }

  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`bg-gradient-to-r ${accentColors[variant]} p-2 rounded-xl mr-3`}>
        <div className={`${sizes[size]} aspect-square bg-white rounded-lg flex items-center justify-center overflow-hidden`}>
          <motion.span 
            className={`font-bold text-2xl ${textColors[variant]}`}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            E
          </motion.span>
        </div>
      </div>
      <div>
        <motion.div 
          className={`font-bold text-xl ${variant === "light" ? "text-white" : "text-gray-900"}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Ekatra
        </motion.div>
        <motion.div 
          className={`text-xs ${variant === "light" ? "text-gray-300" : "text-gray-500"}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Professional Event Management
        </motion.div>
      </div>
    </motion.div>
  )
} 
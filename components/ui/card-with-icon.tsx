import type { LucideIcon } from "lucide-react"

interface CardWithIconProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function CardWithIcon({ icon: Icon, title, description, className = "" }: CardWithIconProps) {
  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <div className="flex items-center mb-4">
        <div className="bg-red-600 p-3 rounded-2xl">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-black ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

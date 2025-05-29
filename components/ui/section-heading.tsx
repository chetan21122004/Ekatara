interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl ${centered ? 'mx-auto' : ''}">{subtitle}</p>}
    </div>
  )
}

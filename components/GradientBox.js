const GradientBox = ({ emoji, title, description, className = "" }) => {
  return (
    <div className={`bg-gradient-to-br from-mint to-seafoam p-8 rounded-2xl shadow-2xl ${className}`}>
      <div className="bg-white rounded-xl p-8 text-center">
        <div className="w-48 h-48 bg-gradient-to-br from-brand to-seafoam rounded-full mx-auto mb-6 flex items-center justify-center text-white text-6xl">
          {emoji}
        </div>
        <h3 className="text-xl font-semibold text-brand mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default GradientBox
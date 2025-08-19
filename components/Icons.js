// Custom icon components using artistic Unicode symbols and CSS styling
// These replace emoji icons with more sophisticated, brand-aligned symbols

export const BrainIcon = ({ className = "w-12 h-12", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◐
  </div>
)

export const GrowthIcon = ({ className = "w-12 h-12", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◈
  </div>
)

export const HeartIcon = ({ className = "w-12 h-12", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◇
  </div>
)

export const WomanIcon = ({ className = "w-12 h-12", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◑
  </div>
)

export const FamilyIcon = ({ className = "w-12 h-12", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◌
  </div>
)

export const OnlineIcon = ({ className = "w-12 h-12", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◎
  </div>
)

export const LeafIcon = ({ className = "w-12 h-12", color = "text-seafoam" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◈
  </div>
)

export const CircleIcon = ({ className = "w-12 h-12", color = "text-mint" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ○
  </div>
)

export const FlowIcon = ({ className = "w-12 h-12", color = "text-sage" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◊
  </div>
)

export const WaveIcon = ({ className = "w-12 h-12", color = "text-seafoam" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light text-4xl`}>
    ◈
  </div>
)

// More artistic alternatives using CSS shapes and gradients
export const ArtisticBrainIcon = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <div className="absolute inset-0 bg-gradient-to-br from-brand to-seafoam rounded-full opacity-20"></div>
    <div className="relative text-brand text-2xl font-light">◐</div>
  </div>
)

export const ArtisticGrowthIcon = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <div className="absolute inset-0 bg-gradient-to-br from-mint to-seafoam rounded-full opacity-20"></div>
    <div className="relative text-seafoam text-2xl font-light">◈</div>
  </div>
)

export const ArtisticHeartIcon = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <div className="absolute inset-0 bg-gradient-to-br from-warm-300 to-warm-400 rounded-full opacity-20"></div>
    <div className="relative text-brand text-2xl font-light">◇</div>
  </div>
)

// Checkmark alternatives
export const CheckIcon = ({ className = "w-5 h-5", color = "text-seafoam" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-bold`}>
    ✓
  </div>
)

export const DotIcon = ({ className = "w-3 h-3", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center`}>
    ●
  </div>
)

export const ArrowIcon = ({ className = "w-4 h-4", color = "text-brand" }) => (
  <div className={`${className} ${color} flex items-center justify-center font-light`}>
    →
  </div>
)
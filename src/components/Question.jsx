import { useState } from "react"
export default function Question({ question, onAnswer, current, total }) {
  const [selected, setSelected] = useState(null)

  function handleSelect(profile) {
    setSelected(profile)
    setTimeout(() => {
      setSelected(null)
      onAnswer(profile)
    }, 400)
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-start px-4 pt-6">
      <div className="max-w-2xl w-full">

        <p className="text-center text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
          Personal Development Test · Unlock Your Potential
        </p>

        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Question {current} of {total}</span>
            <span className="text-sm font-semibold text-amber-400">{Math.round((current / total) * 100)}%</span>
          </div>
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${(current / total) * 100}%` }}
            />
          </div>
        </div>

        <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4 block">
          {question.category}
        </span>

        <h2 className="text-2xl font-bold text-white mb-8 leading-snug">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option.profile)}
              className={`w-full text-left border px-6 py-4 rounded-2xl transition-all duration-200 text-sm leading-relaxed
                ${selected === option.profile
                  ? "bg-amber-400 border-amber-400 text-gray-950 font-semibold scale-[1.02]"
                  : "bg-gray-900 hover:bg-gray-800 border-gray-800 hover:border-amber-400/50 text-gray-300 hover:text-white"
                }`}
            >
              {option.text}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
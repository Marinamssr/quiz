export default function Welcome({ onStart }) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">

        <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Personal Development Test
        </span>

        <h1 className="text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Unlock Your <span className="text-amber-400 italic">Strengths</span>,<br />
          Growth Areas &<br />
          Inner Potential
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          30 questions. 4 unique profiles. Honest, provocative insights based on
          Antifragility and Growth Mindset principles.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10 text-left">
          {[
            { icon: "⚡", title: "Strengths & Talents", desc: "Discover what you naturally do well" },
            { icon: "🔄", title: "Behavioral Patterns", desc: "Understand your working style" },
            { icon: "🌱", title: "Growth Areas", desc: "Identify where to focus next" },
            { icon: "🧠", title: "Emotional Intelligence", desc: "Strengthen your self-awareness" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:-translate-y-1"
        >
          Start the Test
        </button>

        <p className="text-gray-600 text-xs mt-4">Takes about 5 minutes · 30 questions · Free</p>
      </div>
    </div>
  )
}
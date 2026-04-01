const profiles = {
  A: {
    archetype: "The Solitary Strategist",
    tagline: "You see the whole chessboard — but you're afraid to make the move.",
    blindspot: "Your defense mechanism is over-analysis. You use logic as a shield against vulnerability. You intellectualize situations to maintain control, but this keeps you stuck in preparation mode. The next level requires you to act before you feel ready — because you never will.",
    strengths: [
      "Exceptional pattern recognition — you see what others miss",
      "Deep analytical thinking that produces high-quality decisions",
      "Natural ability to design systems, plans, and structures",
      "Others trust your judgment precisely because you think before you speak",
    ],
    growthAreas: [
      "Procrastination disguised as preparation — perfectionism keeps you from launching",
      "Difficulty asking for help, which isolates you from useful perspectives",
      "Tendency to over-complicate simple decisions",
      "Undervaluing intuition and emotional data in decision-making",
    ],
    neuroplasticity: "Practice the '2-Minute Decision' rule: for any non-critical decision, give yourself exactly 2 minutes to decide and commit. No extensions. Also try journaling one imperfect action you took each day — this rewires your brain to trust instinct alongside intellect.",
    potential: [
      "Set a specific goal: ship one imperfect thing per week — a message, a decision, a project",
      "Leverage your strategic strength by volunteering to lead planning in group settings",
      "Adopt a growth mindset by reframing 'not ready' as 'ready enough'",
      "Track your decisions in a journal — you will see that fast decisions are rarely catastrophic",
    ],
    roiArea: "Career",
    roiDetail: "Your strategic mind is a rare asset. The ROI of becoming more decisive will compound faster in your professional life than anywhere else. One shipped idea is worth a hundred perfected ones.",
    affirmation: "Clarity comes from action, not from more thinking.",
    color: "violet",
  },
  B: {
    archetype: "The Chaotic Executor",
    tagline: "You move mountains — but you leave a trail of burnout behind you.",
    blindspot: "Your defense mechanism is constant motion. Stillness feels like failure, so you stay busy to avoid confronting what truly matters. You confuse speed with progress and activity with achievement. Speed is your comfort zone — and your cage.",
    strengths: [
      "Extraordinary ability to take action and produce results under pressure",
      "High energy and contagious drive that motivates everyone around you",
      "Resilience — you bounce back from setbacks faster than most",
      "Natural bias for execution that turns ideas into reality",
    ],
    growthAreas: [
      "Burnout cycles from moving too fast for too long without recovery",
      "Reactive decision-making that creates problems requiring more effort to fix",
      "Difficulty sitting with uncertainty without immediately acting",
      "Overlooking the emotional impact your pace has on others",
    ],
    neuroplasticity: "Practice a '10-second pause' before every reaction. When triggered, breathe for 10 seconds before speaking or acting. Schedule one 'strategic stillness' session per week — 30 minutes with no tasks, just reflection. This builds the muscle your success actually depends on.",
    potential: [
      "Set a specific goal: define what 'enough' looks like for each project before starting",
      "Leverage your execution strength by pairing with a strategic thinker who can slow you down productively",
      "Adopt a growth mindset by treating rest as training, not as weakness",
      "Track your energy levels weekly — notice the pattern between rest and peak performance",
    ],
    roiArea: "Health",
    roiDetail: "Your body and nervous system are paying the price of your pace. Investing in recovery and stillness will multiply your performance — not reduce it. This is the highest-leverage change you can make right now.",
    affirmation: "Rest is not a reward. It is the strategy.",
    color: "amber",
  },
  C: {
    archetype: "The Empathic Mediator",
    tagline: "You hold everyone together — but who is holding you?",
    blindspot: "Your defense mechanism is self-erasure through service. You have confused being needed with being valued. You give generously — but often at the cost of your own growth, goals, and needs. Until you prioritize yourself, you will always give from an empty cup.",
    strengths: [
      "Deep emotional intelligence that makes people feel genuinely seen and heard",
      "Natural ability to resolve conflict and build bridges between people",
      "High social awareness — you read the room better than anyone",
      "Loyalty and consistency that makes you someone people deeply trust",
    ],
    growthAreas: [
      "People-pleasing that causes you to say yes when you mean no",
      "Difficulty having hard conversations about your own needs",
      "Losing yourself in others' priorities at the expense of your own",
      "Seeking external validation before trusting your own judgment",
    ],
    neuroplasticity: "Every morning, before checking your phone, answer one question: 'What do I need today?' Then act on it before attending to others. Practice saying 'let me think about that' instead of immediately saying yes. This rewires your default setting from giving to receiving.",
    potential: [
      "Set a specific goal: identify one boundary to communicate clearly this week",
      "Leverage your empathy strength in leadership, coaching, or mentoring roles",
      "Adopt a growth mindset by reframing boundaries as generosity — you give more when you protect your energy",
      "Track moments when you said yes but meant no — awareness is the first step to change",
    ],
    roiArea: "Relationships",
    roiDetail: "Paradoxically, your relationships will deepen when you show up as a full person with your own needs — not as a selfless support system. The people worth keeping will respect your boundaries. The ones who don't were only there for what you gave.",
    affirmation: "Setting boundaries is an act of love — for yourself and for others.",
    color: "teal",
  },
  D: {
    archetype: "The Quiet Stabilizer",
    tagline: "You are the foundation everyone builds on — but you've stopped building yourself.",
    blindspot: "Your defense mechanism is comfort disguised as patience. You wait for the right moment that never comes, and call it wisdom. Antifragility requires you to seek discomfort deliberately — because growth does not live inside your comfort zone. It lives just outside it.",
    strengths: [
      "Unshakeable reliability that makes you the person others depend on in a crisis",
      "Deep patience and consistency that produces compounding results over time",
      "Thoughtful decision-making that avoids impulsive mistakes",
      "Grounded presence that calms and stabilizes everyone around you",
    ],
    growthAreas: [
      "Staying in comfort zones long past the point of growth",
      "Postponing bold moves while waiting for certainty that never arrives",
      "Underestimating your own capabilities and impact",
      "Avoiding commitments that feel irreversible or uncertain",
    ],
    neuroplasticity: "Each week, deliberately do one thing that makes you mildly uncomfortable — a conversation you have been avoiding, a risk you have been postponing, a commitment you have been delaying. Write it down before and after. This systematically builds your discomfort tolerance and expands what feels possible.",
    potential: [
      "Set a specific goal: commit to one bold action this month that you cannot undo",
      "Leverage your stability strength by anchoring high-energy teams who need your grounded perspective",
      "Adopt a growth mindset by reframing discomfort as a signal that you are growing, not failing",
      "Track one thing per week that scared you but turned out fine — this rewires your risk perception",
    ],
    roiArea: "Career",
    roiDetail: "One bold move in your professional life will unlock opportunities your current patience never will. Your reliability is already proven. What is missing is visibility. The ROI of a single courageous leap outweighs years of quietly waiting.",
    affirmation: "The right moment is the one you create.",
    color: "rose",
  },
}

const colorMap = {
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", badge: "bg-violet-500/20 text-violet-300" },
  amber:  { bg: "bg-amber-400/10",  border: "border-amber-400/30",  text: "text-amber-400",  badge: "bg-amber-400/20 text-amber-300"  },
  teal:   { bg: "bg-teal-500/10",   border: "border-teal-500/30",   text: "text-teal-400",   badge: "bg-teal-500/20 text-teal-300"   },
  rose:   { bg: "bg-rose-500/10",   border: "border-rose-500/30",   text: "text-rose-400",   badge: "bg-rose-500/20 text-rose-300"   },
}

export default function Results({ answers, userName, onRestart }) {
  const count = { A: 0, B: 0, C: 0, D: 0 }
  answers.forEach((a) => count[a]++)
  const topProfile = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0]
  const profile = profiles[topProfile]
  const c = colorMap[profile.color]

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">

        <div className="text-center mb-10">
          <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Your Result
          </span>
          {userName && (
            <p className="text-gray-400 text-sm mb-2">Here are your results, {userName} 👋</p>
          )}
          <h1 className="text-4xl font-black text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            {profile.archetype}
          </h1>
          <p className={`text-lg italic ${c.text}`}>{profile.tagline}</p>
        </div>

        <div className="flex flex-col gap-4">

          <div className={`${c.bg} border ${c.border} rounded-2xl p-6`}>
            <div className={`text-xs font-bold tracking-widest uppercase ${c.text} mb-3`}>🔍 Blind Spot Analysis</div>
            <p className="text-gray-300 text-sm leading-relaxed">{profile.blindspot}</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">⚡ Your Superpowers</div>
            <ul className="flex flex-col gap-2">
              {profile.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.text} bg-current`}/>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">🌱 Growth Areas</div>
            <ul className="flex flex-col gap-2">
              {profile.growthAreas.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-500"/>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">🧬 Neuroplasticity Protocol</div>
            <p className="text-gray-300 text-sm leading-relaxed">{profile.neuroplasticity}</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">🚀 Activate Your Potential</div>
            <ul className="flex flex-col gap-2">
              {profile.potential.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className="flex-shrink-0 text-xs font-bold text-gray-500 mt-0.5">{i + 1}.</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">📈 Highest ROI Area</div>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${c.badge}`}>{profile.roiArea}</span>
            <p className="text-gray-300 text-sm leading-relaxed">{profile.roiDetail}</p>
          </div>

          <div className={`${c.bg} border ${c.border} rounded-2xl p-6 text-center`}>
            <div className={`text-xs font-bold tracking-widest uppercase ${c.text} mb-3`}>⚡ Confrontation Affirmation</div>
            <p className="text-white text-xl font-bold italic">"{profile.affirmation}"</p>
          </div>

        </div>

        <div className="text-center mt-10 border-t border-gray-800 pt-10">
          <p className="text-gray-300 text-base leading-relaxed max-w-lg mx-auto mb-6">
            Knowing your strengths is not vanity — it is strategy. When you understand
            how you are wired, you stop fighting yourself and start directing your energy
            where it creates the most impact. That self-knowledge is the foundation of
            every meaningful change. You took the first step today. Now act on it.
          </p>
          <p className="text-amber-400 font-semibold text-sm mb-1">Made with purpose by Marina Ramos</p>
          <p className="text-gray-600 text-xs mb-8">Personal Development · Growth Mindset · Antifragility</p>

          <button
            onClick={onRestart}
            className="border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white text-sm px-8 py-3 rounded-full transition-all duration-200"
          >
            Take the test again
          </button>
        </div>

      </div>
    </div>
  )
}
import { useState } from "react"

export default function EmailCapture({ onSubmit }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  function handleSubmit() {
    if (!name.trim() || !email.trim()) {
      setError("Please fill in both fields.")
      return
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email.")
      return
    }
    onSubmit(name.trim(), email.trim())
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">

        <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Almost there!
        </span>

        <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
          Where should we send<br />your <span className="text-amber-400 italic">results?</span>
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          Enter your name and email to receive your full personal profile. No spam, ever.
        </p>

        <div className="flex flex-col gap-4 text-left mb-6">
          <div>
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 focus:border-amber-400 text-white placeholder-gray-600 px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full bg-gray-900 border border-gray-800 focus:border-amber-400 text-white placeholder-gray-600 px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm"
            />
          </div>
        </div>

        {error && <p className="text-red-400 text-xs mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-base py-4 rounded-full transition-all duration-200 hover:-translate-y-1"
        >
          See My Results →
        </button>

        <p className="text-gray-600 text-xs mt-4">Your data is never shared or sold.</p>
      </div>
    </div>
  )
}
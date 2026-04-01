import { useState } from "react"
import Welcome from "./components/Welcome"
import Question from "./components/Question"
import EmailCapture from "./components/EmailCapture"
import Results from "./components/Results"
import { questions } from "./data/questions"

export default function App() {
  const [screen, setScreen] = useState("welcome")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  function handleStart() {
    setScreen("quiz")
    setCurrent(0)
    setAnswers([])
  }

  function handleAnswer(profile) {
    const newAnswers = [...answers, profile]
    setAnswers(newAnswers)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setScreen("email")
    }
  }

  function handleEmailSubmit(name, email) {
    setUserName(name)
    setUserEmail(email)
    setScreen("results")
  }

  function handleRestart() {
    setScreen("welcome")
    setCurrent(0)
    setAnswers([])
    setUserName("")
    setUserEmail("")
  }

  return (
    <>
      {screen === "welcome" && <Welcome onStart={handleStart} />}
      {screen === "quiz" && (
        <Question
          question={questions[current]}
          onAnswer={handleAnswer}
          current={current + 1}
          total={questions.length}
        />
      )}
      {screen === "email" && <EmailCapture onSubmit={handleEmailSubmit} />}
      {screen === "results" && (
        <Results
          answers={answers}
          userName={userName}
          onRestart={handleRestart}
        />
      )}
    </>
  )
}
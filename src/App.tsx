import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quiz from './components/quiz/quiz.component'
import QuizContextProvider from './context/quiz/quiz.context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QuizContextProvider>
        <Quiz />
      </QuizContextProvider>
    </div>
  )
}

export default App

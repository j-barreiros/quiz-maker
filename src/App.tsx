import { useState } from 'react'
import './App.css'
import Quiz from './components/quiz/quiz.component'
import QuizContextProvider from './context/quiz-context/quiz.context'

function App() {
  return (
    <div className="App">
      <QuizContextProvider>
        <Quiz/>
      </QuizContextProvider>
    </div>
  )
}

export default App

// Hooks
import { useContext, useState } from "react";
// Context
import { QuizContext } from "../../context/quiz-context/quiz.context";
// Components
import Question from "../question/question.component";
import Option from "../option/option.component";
// Style
import QuizContainer from "./quiz.style";


const Quiz = () => {

    const { questions, addToScore, score } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(-1);
    const quizBtnText = currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz';
    const [finishedQuiz, setFinishedQuiz] = useState(false);

    const checkIfIsRight = () => {
        if (questions[currentQuestion].answerId === currentAnswer) {
            addToScore(1);
        }
    }

    const handleQuizFlow = () => {
        if (currentAnswer == -1) return;

        checkIfIsRight()
        const indexNextQuestion = currentQuestion + 1;

        if (indexNextQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setCurrentAnswer(-1);
        } else {
            setFinishedQuiz(true)
        }
    }

    const ScoreScreen = () => {
        return (
            <h1>{`your score: ${score}`}</h1>
        )
    }

    return (
        <QuizContainer>
            {!finishedQuiz ?
                <Question question={questions[currentQuestion]}>
                    {questions[currentQuestion].options.map((option) =>
                        <Option
                            selected={option.id === currentAnswer}
                            key={option.id}
                            text={option.text}
                            handleClick={() => setCurrentAnswer(option.id)}
                        />
                    )}
                </Question>
                :
                <ScoreScreen />
            }
            <button
                className="quiz-btn"
                onClick={handleQuizFlow}
            >
                {quizBtnText}
            </button>
        </QuizContainer>
    )
}

export default Quiz;
// Hooks
import { useContext, useState } from "react";
import { QuizContext } from "../../context/quiz/quiz.context";
import Option from "../option/option.component";

// Components
import Question from "../question/question.component";

// Styles
import { QuizContainer } from "./quiz.style";

const Quiz = () => {

    const questions = [
        {
            id: 1,
            text: "What is the meaning of life ?",
            answerId: 1,
            options: [
                {
                    id: 1,
                    text: "33",
                },
                {
                    id: 2,
                    text: "25",
                },
                {
                    id: 3,
                    text: "42",
                }
            ]
        },
        {
            id: 2,
            text: "What is real name of Darth Vader ?",
            answerId: 2,
            options: [
                {
                    id: 1,
                    text: "Yoda"
                },
                {
                    id: 2,
                    text: "Anakin",
                },
                {
                    id: 3,
                    text: "Gredo",
                }
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState(-1);
    let answers: number[] = [];
    const quizContext = useContext(QuizContext);

    const handleQuestionFlow = () => {
        
    }

    const handleQuestionAnswer = (answerId: number) => {
        answers[currentQuestion] = answerId;
    }

    return (
        
        <QuizContainer>
            <Question
                question={quizContext.questions[currentQuestion]}
                handleQuestionAnswer={handleQuestionAnswer}
            >
                {questions[currentQuestion].options.map(option =>
                    <Option
                        option={option}
                        selected={userAnswer == option.id}
                        clickHandler={() => setUserAnswer(option.id)}
                    />
                )}
            </Question>
            <button onClick={handleQuestionFlow}>
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
        </QuizContainer>
    )
}

export default Quiz;
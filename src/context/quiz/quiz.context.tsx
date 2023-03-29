import { createContext, ReactNode, useState } from "react";
import { QuizContextType } from "./quiz.types";



export const QuizContext = createContext({} as QuizContextType);

type QuizContextProps = {
    children: ReactNode,
}

const QuizContextProvider = ({children} : QuizContextProps) => {
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
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{questionId:number, answerIsRight: boolean}[]>([]);
    const saveUserAnswers = (questionId : number, userAnswerId: number) => {
        questions.forEach(question => {
            if(question.id == questionId) {
                if(question.answerId == userAnswerId) {
                    setScore(score + 1);
                }
            }
        })
    }

    const ContextValue = {
        questions : questions,
        userAnswers : userAnswers,
        score: score,
        saveUserAnswers : saveUserAnswers,
    }

    return (
        <QuizContext.Provider value={ContextValue}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;
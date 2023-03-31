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
            prompt: "What is the meaning of life ?",
            answerId: 3,
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
            prompt: "What is real name of Darth Vader ?",
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
        },
        {
            id: 3,
            prompt: "What is real name of Baby Yoda ?",
            answerId: 3,
            options: [
                {
                    id: 1,
                    text: "Luke"
                },
                {
                    id: 2,
                    text: "Gredo",
                },
                {
                    id: 3,
                    text: "Grogu",
                }
            ]
        }
    ]

    const [score, setScore] = useState(0);

    const addToScore = (pointsToAdd: number) => {
        setScore(score + pointsToAdd);
        console.log(score)
    }

    const ContextValue = {
        questions : questions,
        score: score,
        addToScore: addToScore,
    }

    return (
        <QuizContext.Provider value={ContextValue}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;
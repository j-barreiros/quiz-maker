import { ReactNode } from "react";
// Types
import { QuestionType } from "../../context/data/data.types";
// Style
import { QuestionContainer } from "./question.style";

type QuestionProps = {
    question: QuestionType;
    handleQuestionAnswer: (answerId : number) => void;
    children: ReactNode,
}

const Question = ({ question, children }: QuestionProps) => {

    const {id, text, options} = question;

    return (
        <QuestionContainer>
            <p className="question-text">{text}</p>
            <section className="options-container">
                {children}
            </section>
        </QuestionContainer>
    )
}

export default Question;
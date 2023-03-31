// Types
import { QuestionType } from "../../context/quiz-context/quiz.types";

// Components
import Option from "../option/option.component";
import QuestionContainer from "./question.style";

type QuestionProps = {
    question: QuestionType;
    children?: React.ReactNode;
}

const Question = ({question,children}:QuestionProps) => {
    
    const {prompt} = question;

    return (
        <QuestionContainer>
            <section className="prompt-section">
                <p>{prompt}</p>
            </section>
            <section className="options-section">
                {children}    
            </section>
        </QuestionContainer>
    )
}

export default Question;
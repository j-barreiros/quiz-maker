import styled from "styled-components";

export const QuestionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .question-prompt {
        font-weight: bold;
    }

    .options-container {
        display: flex;
        flex-direction: column;
    }
`
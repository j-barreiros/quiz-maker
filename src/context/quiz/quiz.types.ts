export type QuestionOptionType = {
    id: number,
    text: string,
}

export type QuestionType = {
    id: number,
    text: string,
    answerId: number,
    options: QuestionOptionType[],
}

export type QuizContextType = {
    questions: QuestionType[],
    userAnswers: {questionId : number, answerIsRight : boolean}[],
    score: number,
    saveUserAnswers: (questionId: number, userAnswerId : number) => void;
}
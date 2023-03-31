export type QuestionOptionType = {
    id: number,
    text: string,
}

export type QuestionType = {
    id: number,
    prompt: string,
    answerId: number,
    options: QuestionOptionType[],
}

export type QuizContextType = {
    questions: QuestionType[],
    score: number,
    addToScore: (pointsToAdd : number) => void;
}
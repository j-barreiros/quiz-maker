
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
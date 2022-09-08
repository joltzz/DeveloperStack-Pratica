import { answers } from "@prisma/client";

export interface Ianswer {
  answeredBy: string,
  answer: string,
  questionId: number
}

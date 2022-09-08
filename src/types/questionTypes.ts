import { questions } from "@prisma/client";

export interface Iquestion {
  askedBy: string,
  question: string
}

export interface Iquestions {
  id: number,
  askedBy: string,
  question: string
}
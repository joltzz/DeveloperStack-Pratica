import * as answerRepository from "../repositories/answerRepository"
import { Ianswer } from "../types/answerTypes"

export async function createAnswer(answer: Ianswer) {
  await answerRepository.createAnswer(answer);
}
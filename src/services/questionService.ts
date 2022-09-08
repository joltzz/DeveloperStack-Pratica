import * as questionRepository from "../repositories/questionRepository"
import { Iquestion } from "../types/questionTypes"

export async function createAQuestion(question: Iquestion) {
  await questionRepository.postQuestion(question);
}

export async function getAllQuestions() {
  const result = await questionRepository.getAllQuestions();
  return result;
}

export async function getQuestionById(id: number) {
  const result = await questionRepository.getById(id);
  return result;
}
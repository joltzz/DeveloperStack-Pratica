import { prisma } from "../config/database";
import { Iquestion, Iquestions } from "../types/questionTypes";

export async function postQuestion(question: Iquestion) {
  await prisma.questions.create({ data: question });
};

export async function getAllQuestions() {
  const result: Iquestions[] = await prisma.questions.findMany({});
  return result;
};

export async function getById(id: number) {
  const result = await prisma.questions.findFirst({ where: { id } });
  return result;
}
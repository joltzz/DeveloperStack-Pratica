import { prisma } from "../config/database";
import { Ianswer } from "../types/answerTypes";

export async function createAnswer(answer: Ianswer) {
  await prisma.answers.create({data: answer});
}

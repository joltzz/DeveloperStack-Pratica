import { Request, Response } from 'express';
import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"
import { Ianswer } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {
  const questionData = req.body;
  await questionService.createAQuestion(questionData);
  res.sendStatus(200);
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy, answer} = req.body;
  const {id} = req.params;
  let objectData: Ianswer = {
    answeredBy,
    answer,
    questionId: Number(id)
  }

  await answerService.createAnswer(objectData);
  res.sendStatus(200);
}

export async function get(req: Request, res: Response) {
  const data = await questionService.getAllQuestions();
  res.send(data).status(200);
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;
  const data = await questionService.getQuestionById(Number(id));
  res.send(data).status(200);
}

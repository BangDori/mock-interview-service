import { QUESTION_COLLECTIONS, TYPE_COLLECTIONS } from '../constants/question';
import { Question } from '../custom/types/Question';
import { shuffle } from './util';

export function getQuestionByType(clickedType: string): Question[] {
  const questions: Question[] = [];

  for (const questionType in TYPE_COLLECTIONS) {
    if (questionType === clickedType) {
      questions.push(...QUESTION_COLLECTIONS[clickedType]);
    }
  }

  return questions;
}

export function getShuffleQuestions(questions: Question[]): Question[] {
  return shuffle<Question>(questions);
}

export function getQuestionAsCount(
  questions: Question[],
  count: number,
): Question[] {
  return questions.slice(0, count);
}

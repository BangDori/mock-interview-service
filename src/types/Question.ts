export interface Question {
  id: number;
  text: string;
}

export type QuestionCollection = {
  [key: string]: Question[];
  personality: Question[];
  cs: Question[];
};

export interface QuestionType {
  name: string;
  count: number;
}

export type QuestionTypeCollection = {
  [key: string]: QuestionType;
  personality: QuestionType;
  cs: QuestionType;
};

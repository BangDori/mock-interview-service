import {
  QuestionCollection,
  QuestionTypeCollection,
} from '@custom/types/Question';

import personality from './personality';
import cs from './cs';

const QUESTION_COLLECTIONS: QuestionCollection = Object.freeze({
  personality,
  cs,
});

const TYPE_COLLECTIONS: QuestionTypeCollection = Object.freeze({
  personality: {
    name: 'personality',
    count: 10,
  },
  cs: {
    name: 'cs',
    count: 25,
  },
});

export { QUESTION_COLLECTIONS, TYPE_COLLECTIONS };

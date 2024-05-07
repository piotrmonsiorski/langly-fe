import { Sentence } from 'types/sentence.model';
import { TrainEntry } from 'types/train.model';

export const getSentenceTrainEntries = (sentences: Sentence[]): TrainEntry[] =>
  sentences.map(({ value, value_en }) => ({ value, value_en }));

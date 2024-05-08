import { Sentence } from 'types/sentence.model';
import { SentenceTrainEntry, WordTrainEntry } from 'types/train.model';
import { Word } from 'types/word.model';

export const getSentenceTrainEntries = (
  sentences: Sentence[]
): SentenceTrainEntry[] =>
  sentences.map(({ value, value_en }) => ({
    type: 'sentence',
    value,
    value_en,
  }));

export const getWordTrainEntries = (words: Word[]): WordTrainEntry[] =>
  words.map(({ type, value, value_en }) => ({
    type,
    value: value,
    value_en,
  }));

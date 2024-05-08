import { WordType, WordValue } from './word.model';

export type EntryType = 'sentence' | WordType;

export type SentenceTrainEntry = {
  type: 'sentence';
  value_en: string;
  value: string;
};

export type WordTrainEntry = {
  type: WordType;
  value_en: string;
  value: WordValue;
};

export type TrainEntry = SentenceTrainEntry | WordTrainEntry;

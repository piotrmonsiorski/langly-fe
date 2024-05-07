import './WordsList.scss';

import { Props } from './WordsList.model';
import Word from 'components/molecules/Word';

const WordsList = ({ words }: Props) => {
  return (
    <div className="WordsList">
      {words.map(word => (
        <Word key={word.value_en} word={word} />
      ))}
    </div>
  );
};

export default WordsList;

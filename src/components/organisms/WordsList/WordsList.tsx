import './WordsList.scss';

import { Props } from './WordsList.model';
import Word from 'components/molecules/Word';

const WordsList = ({ words }: Props) => {
  console.log('words: ', words);

  return (
    <div className="WordsList">
      {words.map(word => (
        <Word word={word} />
      ))}
    </div>
  );
};

export default WordsList;

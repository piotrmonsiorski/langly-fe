import './SentencesList.scss';

import Sentence from 'components/molecules/Sentence';
import { Props } from './SentencesList.model';

const SentencesList = ({ sentences }: Props) => {
  console.log('categories: ', sentences);

  return (
    <div className="SentencesList">
      {sentences.map(sentence => (
        <Sentence sentence={sentence} />
      ))}
    </div>
  );
};

export default SentencesList;

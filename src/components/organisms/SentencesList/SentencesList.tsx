import './SentencesList.scss';

import Sentence from 'components/molecules/Sentence';
import { Props } from './SentencesList.model';

const SentencesList = ({ sentences }: Props) => {
  return (
    <div className="SentencesList">
      {sentences.map(sentence => (
        <Sentence key={sentence.value_en} sentence={sentence} />
      ))}
    </div>
  );
};

export default SentencesList;

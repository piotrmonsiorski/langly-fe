import { Props } from './Sentence.model';
import './Sentence.scss';

const Sentence = ({ sentence }: Props) => {
  return (
    <div className="Sentence">
      <h3>{sentence.value_en}</h3>
    </div>
  );
};

export default Sentence;

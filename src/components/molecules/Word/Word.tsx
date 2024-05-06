import { Props } from './Word.model';
import './Word.scss';

const Word = ({ word }: Props) => {
  return (
    <div className="Word">
      <h3>{word.value_en}</h3>
      {word.type}
    </div>
  );
};

export default Word;

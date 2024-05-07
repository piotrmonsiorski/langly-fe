import { useState } from 'react';
import { Props } from './TrainEntry.model';
import './TrainEntry.scss';

const TrainEntry = ({ entry }: Props) => {
  const [showResult, setShowResult] = useState<boolean>(false);

  const toggleShowResult = () => setShowResult(s => !s);

  return (
    <div className="TrainEntry" onClick={toggleShowResult}>
      {showResult ? entry.value : entry.value_en}
    </div>
  );
};

export default TrainEntry;

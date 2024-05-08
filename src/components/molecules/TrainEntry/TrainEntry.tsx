import { useEffect, useState } from 'react';
import { Props } from './TrainEntry.model';
import './TrainEntry.scss';
import TrainEntryValue from 'components/atoms/TrainEntryValue';

const TrainEntry = ({ entry }: Props) => {
  const [showResult, setShowResult] = useState<boolean>(false);

  const toggleShowResult = () => setShowResult(s => !s);

  useEffect(() => {
    setShowResult(false);
  }, [entry.value_en]);

  return (
    <div className="TrainEntry" onClick={toggleShowResult}>
      {showResult ? (
        <TrainEntryValue entry={entry} />
      ) : (
        <div className="block">
          <p className="value">{entry.value_en}</p>
        </div>
      )}
    </div>
  );
};

export default TrainEntry;

import TrainEntry from 'components/molecules/TrainEntry';
import { Props } from './TrainWindow.model';
import './TrainWindow.scss';
import { useState } from 'react';
import TrainSwitch from 'components/atoms/TrainSwitch/TrainSwitch';

const TrainWindow = ({ entries }: Props) => {
  const [selectedEntry, setSelectedEntry] = useState<number>(0);

  const goBack = () =>
    selectedEntry > 0 ? setSelectedEntry(id => id - 1) : () => {};
  const goNext = () =>
    selectedEntry < entries.length - 1
      ? setSelectedEntry(id => id + 1)
      : () => {};

  return entries.length ? (
    <div className="TrainWindow">
      <TrainSwitch
        type="back"
        onClick={goBack}
        disabled={selectedEntry === 0}
      />
      <TrainEntry entry={entries[selectedEntry]} />
      <TrainSwitch
        type="next"
        onClick={goNext}
        disabled={selectedEntry === entries.length - 1}
      />
    </div>
  ) : null;
};

export default TrainWindow;

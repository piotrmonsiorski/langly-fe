import { TrainEntry } from 'types/train.model';
import { Props, BlockProps } from './TrainEntryValue.model';
import './TrainEntryValue.scss';
import clsx from 'clsx';

const TrainEntryValueBlock = ({ label, value }: BlockProps) => {
  return (
    <div className="TrainEntryValueBlock">
      {label && <span className="label">{label}</span>}
      {value && <p className="value">{value}</p>}
    </div>
  );
};

const getValue = (entry: TrainEntry) => {
  switch (entry.type) {
    case 'sentence':
      return <TrainEntryValueBlock value={entry.value} />;
    case 'word':
      return <TrainEntryValueBlock value={entry.value.word} />;
    case 'plural':
      return (
        <div className="grid">
          <TrainEntryValueBlock label="singular" value={entry.value.singular} />
          <TrainEntryValueBlock label="plural" value={entry.value.plural} />
        </div>
      );
    case 'adj':
      return (
        <div className="grid">
          <TrainEntryValueBlock label="male" value={entry.value.male} />
          <TrainEntryValueBlock label="female" value={entry.value.female} />
        </div>
      );
    case 'verb':
      return (
        <>
          <TrainEntryValueBlock value={entry.value.infinitive} />
          <div className="grid">
            <TrainEntryValueBlock
              label="yo"
              value={entry.value.singular_first}
            />
            <TrainEntryValueBlock
              label="nosotros"
              value={entry.value.plural_first}
            />
            <TrainEntryValueBlock
              label="tu"
              value={entry.value.singular_second}
            />
            <TrainEntryValueBlock
              label="vosotros"
              value={entry.value.plural_second}
            />
            <TrainEntryValueBlock
              label="el / ella"
              value={entry.value.singular_third}
            />
            <TrainEntryValueBlock
              label="ellos / ellas"
              value={entry.value.plural_third}
            />
          </div>
        </>
      );

    default:
      return null;
  }
};

const TrainEntryValue = ({ entry }: Props) => {
  return (
    <div className={clsx('TrainEntryValue', entry.type)}>{getValue(entry)}</div>
  );
};

export default TrainEntryValue;

import clsx from 'clsx';
import Icon from '../Icon';
import { Props } from './TrainSwitch.model';
import './TrainSwitch.scss';

const TrainSwitch = ({ type, onClick, disabled = false, className }: Props) => {
  return (
    <div
      className={clsx('TrainSwitch', type, disabled && 'disabled', className)}
      onClick={onClick}
    >
      <Icon name={type === 'back' ? 'fasChevronLeft' : 'fasChevronRight'} />
    </div>
  );
};

export default TrainSwitch;

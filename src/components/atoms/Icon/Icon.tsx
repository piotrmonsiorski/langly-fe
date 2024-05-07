import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from './icons';

import { Props } from './Icon.model';
import './Icon.scss';

const Icon = ({ className, color = 'black', name, size }: Props) => {
  return (
    <FontAwesomeIcon
      className={clsx('Icon', color && `Icon--${color}`, className)}
      icon={icons[name]}
      size={size}
    />
  );
};

export default Icon;

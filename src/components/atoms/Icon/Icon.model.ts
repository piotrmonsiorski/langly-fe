import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { icons } from './icons';

export type IconName = keyof typeof icons;
export type IconColor = 'black' | 'white' | 'gray';
export type IconSize = SizeProp;

export interface Props {
  name: IconName;

  className?: string;
  size?: IconSize;
  color?: IconColor;
}

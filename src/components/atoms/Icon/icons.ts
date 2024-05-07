import {
  faChevronLeft as fasChevronLeft,
  faChevronRight as fasChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';

const fasIcons = {
  fasChevronLeft,
  fasChevronRight,
};
const farIcons = {
  farSquare,
};

export const icons = {
  ...fasIcons,
  ...farIcons,
};

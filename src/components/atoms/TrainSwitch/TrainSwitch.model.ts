export interface Props {
  type: 'back' | 'next';
  onClick: React.MouseEventHandler;

  disabled?: boolean;
  className?: string;
}

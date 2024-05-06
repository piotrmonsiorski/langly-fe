import { Props } from './Button.model';
import './Button.scss';

const Button = ({ label, onClick }: Props) => {
  return (
    <button className="Button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

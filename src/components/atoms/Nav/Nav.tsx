import { Props } from './Nav.model';
import './Nav.scss';

const Nav = ({ children }: Props) => {
  return <div className="Nav">{children}</div>;
};

export default Nav;

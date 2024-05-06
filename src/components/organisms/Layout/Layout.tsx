import { Props } from './Layout.model';
import './Layout.scss';

const Layout = ({ children }: Props) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;

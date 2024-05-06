import { Link } from 'react-router-dom';
import { Props } from './Category.model';
import './Category.scss';

const Category = ({ category }: Props) => {
  return (
    <Link to={`/category/${category.id}`}>
      <div className="Category">{category.label}</div>
    </Link>
  );
};

export default Category;

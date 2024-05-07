import './CategoriesList.scss';

import Category from 'components/molecules/Category';
import { Props } from './CategoriesList.model';

const CategoriesList = ({ categories }: Props) => {
  return (
    <div className="CategoriesList">
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;

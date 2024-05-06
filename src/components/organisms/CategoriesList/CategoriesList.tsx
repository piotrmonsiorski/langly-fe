import './CategoriesList.scss';

import Category from 'components/molecules/Category';
import { Props } from './CategoriesList.model';

const CategoriesList = ({ categories }: Props) => {
  console.log('categories: ', categories);

  return (
    <div className="CategoriesList">
      {categories.map(category => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;

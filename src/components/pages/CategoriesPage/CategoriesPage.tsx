import CategoriesList from 'components/organisms/CategoriesList';

import { useEffect, useState } from 'react';
import api from 'api';
import { WordCategory } from 'types/word.model';
import Button from 'components/atoms/Button';
import { wordsToReload } from 'words';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<WordCategory[]>([]);

  const reloadWords = () =>
    wordsToReload.forEach(word =>
      api.words
        .add(word)
        .then(res => {
          console.log(res.data.message);
        })
        .catch(err => {
          console.log('err: ', err);
        })
    );

  const getCategories = async () => {
    await api.categories
      .get()
      .then(res => {
        setCategories(res.data.categories);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="CategoriesPage">
      <Button label="Reload words" onClick={reloadWords} />
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CategoriesPage;

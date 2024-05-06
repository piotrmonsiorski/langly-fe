import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Word } from 'types/word.model';
import api from 'api';
import WordsList from 'components/organisms/WordsList';

const CategoryPage = () => {
  const { category } = useParams();

  const [words, setWords] = useState<Word[]>([]);

  const getWords = async () => {
    await api.words
      .get(category || '')
      .then(res => {
        setWords(res.data.words);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div className="CategoryPage">
      <WordsList words={words} />
    </div>
  );
};

export default CategoryPage;

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Word } from 'types/word.model';
import api from 'api';
import WordsList from 'components/organisms/WordsList';
import './CategoryPage.scss';
import { paths } from 'router/paths';
import Nav from 'components/atoms/Nav';

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
      <Nav>
        <Link to={paths.categories}>back to categories</Link>
      </Nav>
      <WordsList words={words} />
    </div>
  );
};

export default CategoryPage;

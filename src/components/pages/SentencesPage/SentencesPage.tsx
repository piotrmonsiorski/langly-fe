import SentencesList from 'components/organisms/SentencesList';

import { useEffect, useState } from 'react';
import api from 'api';
import Button from 'components/atoms/Button';
import { sentencesToReload } from 'assets/data/sentences';
import { Link } from 'react-router-dom';
import { paths } from 'router/paths';
import { Sentence } from 'types/sentence.model';

const SentencesPage = () => {
  const [sentences, setSentences] = useState<Sentence[]>([]);

  const reloadSentences = () =>
    sentencesToReload.forEach(sentence =>
      api.sentences
        .add(sentence)
        .then(res => {
          console.log(res.data.message);
        })
        .catch(err => {
          console.log('err: ', err);
        })
    );

  const getSentences = async () => {
    await api.sentences
      .get()
      .then(res => {
        setSentences(res.data.sentences);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    getSentences();
  }, []);

  return (
    <div className="SentencesPage">
      <Link to={paths.categories}>categories</Link>
      <Button label="Reload sentences" onClick={reloadSentences} />
      <SentencesList sentences={sentences} />
    </div>
  );
};

export default SentencesPage;

import SentencesList from 'components/organisms/SentencesList';

import { useEffect, useState } from 'react';
import api from 'api';
import Button from 'components/atoms/Button';
import { sentencesToReload } from 'assets/data/sentences';
import { Link } from 'react-router-dom';
import { paths } from 'router/paths';
import { Sentence } from 'types/sentence.model';
import './SentencesPage.scss';
import Nav from 'components/atoms/Nav';

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

  const clearSentences = async () =>
    await api.sentences
      .removeAll()
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => {
        console.log('err: ', err);
      });

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
      <Nav>
        <Link to={paths.categories}>categories</Link>
        <Link to={`/train/sentences/all`}>train</Link>
        <Button label="Reload sentences" onClick={reloadSentences} />
        <Button label="Clear sentences" onClick={clearSentences} />
      </Nav>
      <SentencesList sentences={sentences} />
    </div>
  );
};

export default SentencesPage;

import { useEffect, useState } from 'react';

import api from 'api';
import { getSentenceTrainEntries } from 'utils/train';
import { TrainEntry } from 'types/train.model';
import TrainWindow from 'components/organisms/TrainWindow';
import { Link, useParams } from 'react-router-dom';
import { paths } from 'router/paths';
import './TrainPage.scss';
import Nav from 'components/atoms/Nav';

const TrainPage = () => {
  const { mode } = useParams();
  const [entries, setEntries] = useState<TrainEntry[]>([]);

  const getSentenceEntries = async () => {
    await api.sentences
      .get()
      .then(res => {
        setEntries(getSentenceTrainEntries(res.data.sentences));
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    if (mode === 'sentences') {
      getSentenceEntries();
    }
  }, [mode]);

  return (
    <div className="TrainPage">
      <Nav>
        <Link to={paths.categories}>categories</Link>
        <Link to={paths.sentences}>sentences</Link>
      </Nav>
      <TrainWindow entries={entries} />
    </div>
  );
};

export default TrainPage;

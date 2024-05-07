import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { paths } from 'router/paths';
import CategoriesPage from 'components/pages/CategoriesPage';
import Layout from 'components/organisms/Layout';
import CategoryPage from 'components/pages/CategoryPage';
import SentencesPage from 'components/pages/SentencesPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={paths.category} element={<CategoryPage />} />
        <Route path={paths.categories} element={<CategoriesPage />} />
        <Route path={paths.sentences} element={<SentencesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;

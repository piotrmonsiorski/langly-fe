import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { applyMiddleware, createStore } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers from 'redux/reducers';
import App from './App';

import './assets/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

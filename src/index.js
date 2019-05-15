import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import configureStore, {history} from './store';
import client from './client';

import App from './components/App';

import './index.css';

const store = configureStore()

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

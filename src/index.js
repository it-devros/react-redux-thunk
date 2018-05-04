/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hashHistory } from 'react-router';

import configureStore, { history } from './store/configureStore';

import Container from './container';

require('./favicon.ico');

const store = configureStore();

render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Container history={history} />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./container', () => {
    const NewRoot = require('./container').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

import './styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '@store';
import App from '@containers/App';
import Loadable from 'react-loadable';
import { I18nextProvider } from 'react-i18next';
import i18n from '@lib/i18n';

// Hydrate the redux store from server state.
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(initialState, history);

// Render the application
window.main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ConnectedRouter>
      </Provider>,
      document.getElementById('app')
    );
  });
};

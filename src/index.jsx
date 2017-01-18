import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './AppState';
import App from './App';
import PlanePerson from './components/PlanePerson'
import PlaneBase from './components/PlaneBase'
import PlaneHistory from './components/PlaneHistory'
import PlaneProgress from './components/PlaneProgress'
const appState = new AppState();

render(
  <AppContainer>
    <div>
      <PlanePerson  />
      <PlaneBase />
      <PlaneHistory />
      <PlaneProgress />
    </div>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

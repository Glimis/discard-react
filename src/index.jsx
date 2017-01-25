import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BaseInfo from './model/BaseInfo';
import App from './App';

import PanelBase from './components/Panel/PanelBase'
import PanelProgress from './components/Panel/PanelProgress'
// import PanelPerson from './components/PanelPerson'
// import PanelHistory from './components/PanelHistory'
const baseInfo = new BaseInfo();


render(
  <AppContainer>
    <div>
      <PanelBase baseInfo={baseInfo} />
      
    </div>
  </AppContainer>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default;

//     render(
//       <AppContainer>
//         <NextApp baseInfo={baseInfo} />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }

import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import routers from 'router/router';
import createStore from 'reduxs/store';

const store = createStore();
/**
 * 初始化
 */
renderWithHotReload(routers());


/**
 * 热更新
 */
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const routers = require('./router/router').default;
    renderWithHotReload(routers());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        { RootElement }
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}
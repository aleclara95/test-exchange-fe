import React from 'react';

import TopBar from '../../containers/TopBar/TopBar'

import './Layout.scss';

// <div>MainScreen, TradeHistory</div>

const layout = (props) => (
  <React.Fragment>
    <main class="layout">
      { props.children }
    </main>
  </React.Fragment>
);

export default layout;

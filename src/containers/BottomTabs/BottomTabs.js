import React from 'react';

import './BottomTabs.scss';

import { Card, Tab } from 'semantic-ui-react';

import ActiveOrders from './ActiveOrders/ActiveOrders';

const panes = [
  { menuItem: 'Active Orders', render: () => <Tab.Pane><ActiveOrders type='buy'></ActiveOrders></Tab.Pane> },
  { menuItem: 'Latest Trades', render: () => <Tab.Pane></Tab.Pane> }
]

const bottomtabs = (props) => (
  <div class="bottom-tabs">
    <Tab panes={panes}/>
  </div>
);

export default bottomtabs;

import React from 'react';

import './BottomTabs.scss';

import { Tab } from 'semantic-ui-react';

import ActiveOrders from './ActiveOrders/ActiveOrders';

const panes = [
  {
    menuItem: 'Active Orders',
    render: () => (
      <Tab.Pane>
        <ActiveOrders type='buy'></ActiveOrders>
      </Tab.Pane>
    )
  },
  { menuItem: 'Latest Trades', render: () => <Tab.Pane></Tab.Pane> }
];

const bottomtabs = props => (
  <div className='bottom-tabs'>
    <Tab panes={panes} />
  </div>
);

export default bottomtabs;

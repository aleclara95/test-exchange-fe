import React from 'react';

import './BottomTabs.scss';

import { Tab } from 'semantic-ui-react';

import ActiveOrders from './ActiveOrders/ActiveOrders';

const bottomtabs = props => {
  const panes = [
    {
      menuItem: 'Active Orders',
      render: () => (
        <Tab.Pane>
          <ActiveOrders currentCurrencyPair={props.currentCurrencyPair} />
        </Tab.Pane>
      )
    },
    { menuItem: 'Latest Trades', render: () => <Tab.Pane></Tab.Pane> }
  ];

  return (
    <div className='bottom-tabs'>
      <Tab panes={panes} />
    </div>
  );
};

export default bottomtabs;

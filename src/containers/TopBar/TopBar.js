import React from 'react';

import './TopBar.scss';

import CurrencyPairSelect from './CurrencyPairSelect/CurrencyPairSelect';
import Logout from './Logout/Logout';

const topbar = props => (
  <div className='topbar'>
    <CurrencyPairSelect />
    <Logout />
  </div>
);

export default topbar;

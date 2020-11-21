import React from 'react';

import './TopBar.scss';

import CurrencyPairSelect from './CurrencyPairSelect/CurrencyPairSelect'

const topbar = (props) => (
  <div className="topbar">
    <CurrencyPairSelect/>
  </div>
);

export default topbar;

import React, { Component } from 'react';
import { Select } from 'semantic-ui-react'


class CurrencyPairSelect extends Component {
  render() {
    const currencyPairOptions = [
      { key: 'USD/BTC', value: 'USD/BTC', 'text': 'USD/BTC' },
      { key: 'EUR/USD', value: 'EUR/USD', 'text': 'EUR/USD' }
    ]
    return <Select options={currencyPairOptions} defaultValue={currencyPairOptions[0]['value']}/>;
  }
};

export default CurrencyPairSelect;

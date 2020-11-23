import React, { Component } from 'react';
import { Select } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { currencyPairActionCreator } from './redux/actions';

class CurrencyPairSelect extends Component {
  componentDidMount() {
    let token;
    if (this.props.session.user) {
      token = this.props.session.user.token;
    }
    this.props.getCurrencyPairs(token);
  }

  handleChange = (e, { value }) => {
    const values = value.split('/');
    const currentCurrencyPair = {
      currentOrigin: values[0],
      currentDestination: values[1],
      current: value
    };
    this.props.setCurrentCurrencyPair(currentCurrencyPair);
  };

  render() {
    let currencyPairs;
    let currencyPairOptions = [];

    if (this.props.currencyPair.currencyPairs) {
      currencyPairs = this.props.currencyPair.currencyPairs;

      currencyPairOptions = currencyPairs.map(cp => {
        let currencyPair = `${cp.origin}/${cp.destination}`;
        let currencyPairObj = {
          key: currencyPair,
          value: currencyPair,
          text: currencyPair
        };
        return currencyPairObj;
      });
      if (!this.props.currencyPair.currentCurrencyPair) {
        const values = currencyPairOptions[0].value.split('/');
        const currentCurrencyPair = {
          currentOrigin: values[0],
          currentDestination: values[1],
          current: currencyPairOptions[0].value
        };
        this.props.setCurrentCurrencyPair(currentCurrencyPair);
      }
    }

    const { currentCurrencyPair } = this.props.currencyPair;
    return (
      <Select
        options={currencyPairOptions}
        defaultValue={
          currencyPairOptions[0] ? currencyPairOptions[0].value : ''
        }
        onChange={this.handleChange}
        value={currentCurrencyPair ? currentCurrencyPair.current : ''}
      />
    );
  }
}

const mapStateToProps = ({ currencyPair, session }) => {
  return {
    currencyPair,
    session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...currencyPairActionCreator(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPairSelect);

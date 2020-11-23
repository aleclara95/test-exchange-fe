import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Layout from '../Layout/Layout';
import TopBar from '../../containers/TopBar/TopBar';
import Balance from '../../containers/Balance/Balance';
import OrderFormContainer from '../../containers/OrderFormContainer/OrderFormContainer';
import OrderBook from '../../containers/OrderBook/OrderBook';
import MainScreen from '../../containers/MainScreen/MainScreen';
import TradingHistory from '../../containers/TradingHistory/TradingHistory';
import BottomTabs from '../../containers/BottomTabs/BottomTabs';

const main = props => {
  if (!props.session.user) return <Redirect to={'/login'} />;
  const { currentCurrencyPair } = props.currencyPair;
  return (
    <React.Fragment>
      <Layout>
        <TopBar />
        <Balance currentCurrencyPair={currentCurrencyPair} />
        <OrderFormContainer currentCurrencyPair={currentCurrencyPair} />
        <OrderBook currentCurrencyPair={currentCurrencyPair} />
        <MainScreen />
        <TradingHistory currentCurrencyPair={currentCurrencyPair} />
        <BottomTabs currentCurrencyPair={currentCurrencyPair} />
      </Layout>
    </React.Fragment>
  );
};

const mapStateToProps = ({ session, currencyPair }) => {
  return {
    session,
    currencyPair
  };
};

export default connect(mapStateToProps, null)(main);

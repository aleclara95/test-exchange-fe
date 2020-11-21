import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout/Layout';
import TopBar from './containers/TopBar/TopBar';
import Balance from './containers/Balance/Balance';
import OrderFormContainer from './containers/OrderFormContainer/OrderFormContainer';
import OrderBook from './containers/OrderBook/OrderBook';
import MainScreen from './containers/MainScreen/MainScreen';
import TradingHistory from './containers/TradingHistory/TradingHistory';
import BottomTabs from './containers/BottomTabs/BottomTabs';

function App() {
  return (
    <Layout>
      <TopBar/>
      <Balance/>
      <OrderFormContainer/>
      <OrderBook/>
      <MainScreen/>
      <TradingHistory/>
      <BottomTabs/>
    </Layout>
  );
}

export default App;

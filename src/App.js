import React from 'react';
import './App.css';

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import Main from './components/Main/Main';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Main} exact />
          <Route path={'/login'} component={LoginForm} exact />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

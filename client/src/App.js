import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/" component={Authentication}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

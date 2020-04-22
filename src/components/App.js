import React, { Component } from 'react';
import Main from './Main';
import Profile from './Profile';
import Fortune from './Fortune';
import GoToMain from './GoToMain';
import NoMatch from './NoMatch';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/main" />

          <Route path="/main" component={Main}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/foo" component={GoToMain}></Route>
          <Route path="/fortune/:name&:birthday" component={Fortune} />
          <Route path="*" component={NoMatch}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
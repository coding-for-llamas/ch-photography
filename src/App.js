import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import FourOhFour from './containers/404';

export class App extends PureComponent {
  render() {
    return (
      <div id="App" className="App Site">
        <Router>
          <Navbar />
          <div className="siteContent">
            <Switch>
              <Route exact path="/" component={AppTemplate} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;

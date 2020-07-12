import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import DefaultAbout from './containers/About/About';
import DefaultContact from './containers/Contact/Contact';
import DefaultPackages from './containers/Packages/Packages';
import DefaultPortfolio from './containers/Portfolio/Portfolio';
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
              <Route exact path="/about" component={DefaultAbout} />
              <Route exact path="/portfolio" component={DefaultPortfolio} />
              <Route exact path="/contact" component={DefaultContact} />
              <Route exact path="/packages" component={DefaultPackages} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;

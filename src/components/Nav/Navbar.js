import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';
import DefaultCollapsableNav from './CollapsableNav';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 320 };
  }

  onResize(width) {
    this.setState({ width });
  }

  render() {
    const { width } = this.state;
    return (
      <>
        {width <= 768
          ? (
            <DefaultCollapsableNav />
          ) : (
            <nav className="menu flex">
              <ul className="menu-nav">
                <li className="nav-item"><NavLink to="/" className="nav-link" exact activeClassName="active">HOME</NavLink></li>
                <li className="nav-item"><NavLink to="/about" className="nav-link" exact activeClassName="active">ABOUT</NavLink></li>
                <li className="nav-item"><NavLink to="/portfolio" className="nav-link" exact activeClassName="active">PORTFOLIO</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" className="nav-link" exact activeClassName="active">CONTACT</NavLink></li>
                <li className="nav-item"><NavLink to="/packages" className="nav-link" exact activeClassName="active">PRICES/PACKAGES</NavLink></li>
              </ul>
            </nav>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </>
    );
  }
}

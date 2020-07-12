import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultPortfolioContent from './PortfolioContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('PORTFOLIO'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultPortfolioContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Portfolio;

import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultPackagesContent from './PackagesContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Packages extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('PRICES/PACKAGES'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultPackagesContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Packages;

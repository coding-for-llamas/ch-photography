import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultAboutContent from './AboutContent';
import DefaultFooter from '../../components/Footer/Footer';

export class About extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('About Us'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultAboutContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default About;

import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultContactContent from './ContactContent';
import DefaultFooter from '../../components/Footer/Footer';

export class About extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('CONTACT'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultContactContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default About;

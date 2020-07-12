import React from 'react';

const PackagesContent = () => (
  <main className="packages">
    <h1>PRICES/PACKAGES</h1>
    <div className="splitter">
      <p>I have a large selection of prices and packages to fit every model&apos;s need no matter how big or small.</p>
    </div>
    <div className="packages-portrait">
      <p>Add packages portrait here.</p>
    </div>
    <div className="package-row-1">
      <div className="col">
        <div className="row">
          <h1>PACKAGE 1</h1>
          <h2 className="subheader-h2">$100 (50% off for first time clients)*</h2>
          <h3 className="sub-header-h3">Service includes:</h3>
          <ul>
            <li>One hour session</li>
            <li>10 varying sizes of prints</li>
            <li>Thumbdrive/CD with photos from shoot</li>
            <li>1 location of your choice</li>
            <li>1 costume change allowed</li>
          </ul>
        </div>
        <div className="row">
          <h1>PACKAGE 2</h1>
          <h2 className="subheader-h2">$150 (50% off for first time clients)*</h2>
          <h3 className="sub-header-h3">Service includes:</h3>
          <ul>
            <li>One hour session</li>
            <li>15 varying sizes of prints</li>
            <li>Thumbdrive/CD with photos from shoot</li>
            <li>2 location of your choice</li>
            <li>3 costume change allowed</li>
          </ul>
        </div>
        <div className="row">
          <h1>PACKAGE 3</h1>
          <h2 className="subheader-h2">$200 (50% off for first time clients)*</h2>
          <h3 className="sub-header-h3">Service includes:</h3>
          <ul>
            <li>Two hour session</li>
            <li>20 varying sizes of prints</li>
            <li>Thumbdrive/CD with photos from shoot</li>
            <li>3 location of your choice</li>
            <li>5 costume change allowed</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="splitter">
      <p>Add splitter here</p>
    </div>
    <div className="package-row-1">
      <div className="col">
        <div className="row">
          <h1>EVENT PHOTOGRAPHY</h1>
          <h2 className="subheader-h2">$200 + $5 per hour (50% off for first time clients)*</h2>
          <h3 className="sub-header-h3">Service includes:</h3>
          <ul>
            <li>Stationary AND roaming photography event</li>
            <li>10 varying sizes of prints, $3 per extra photos for guests</li>
            <li>Thumbdrive/CD with photos from shoot</li>
          </ul>
        </div>
        <div className="row">
          <h1>BOUDOIR PHOTOGRAPHY</h1>
          <h2 className="subheader-h2">$250 + $5 an hour (50% off for first time clients)*</h2>
          <h3 className="sub-header-h3">Service includes:</h3>
          <ul>
            <li>Two hour session</li>
            <li>15 varying sizes of prints</li>
            <li>Thumbdrive/CD with photos from shoot</li>
            <li>1 location of your choice</li>
            <li>3 costume change allowed</li>
          </ul>
        </div>
        <div className="row">
          <h1>INDIVIDUAL SERVICES</h1>
          <ul className="no-style">
            <li>Headshots..................................$3 per prints/photos</li>
            <li>Portraits.....................................$5 per prints/photos</li>
            <li>Archetecture.............................$15/hour</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="disclaimer">
      <p>*does not include price of travel/gas</p>
    </div>
  </main>
);

export default PackagesContent;

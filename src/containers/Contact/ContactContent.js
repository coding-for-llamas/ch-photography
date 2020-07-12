import React from 'react';

const ContactContent = () => (
  <main className="contact">
    <h1 className="contact-header">CONTACT</h1>
    <div className="contact-info">
      <h2>Caledonia H.</h2>
      <a href="mailto:Caledonia.Hanson@gmail.com">Caledonia.Hanson@gmail.com</a>
      <a href="tel:9497519623">(949) 751-9623</a>
    </div>
    <div className="rounded-portrait">
      <img src="https://dl.dropboxusercontent.com/s/g3nrp8w829wqbft/Caledonia_Portrait_Lg.png?dl=0" alt="A portait of Caledonia" />
    </div>
    <div className="contact-form">
      <p>Add in contact form here</p>
    </div>
    <div className="thumbtack-link">
      <div className="thumbtack-1">
        <a href="https://www.thumbtack.com/ca/los-angeles/event-photographers/caledonia-hanson-photography/service/234009076061431007?project_pk=">
          <img
            src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/orange/2015.svg"
            alt="A badge from Thumbtack for a reward won in 2015 for professionalism."
          />
          Book me on Thumbtack
        </a>
      </div>
    </div>
  </main>
);

export default ContactContent;

import React from 'react';

const AboutContent = () => (
  <main className="about">
    <h1>MEET THE ARTIST</h1>
    <h2>Caledonia Hanson</h2>

    <div className="about-content">
      <p>Caledonia Hanson was born on the historic road of Route 66 in Arizona and was raised in the heart of Orange County.</p>

      <p>
        A graduate of the Orange County High School of the Arts for Film and TV, Caleodnia has continued her
        passion for film and photography and doesn&apos;t limit herself to traditional shoots.
      </p>

      <p>
        You can find her in the heart of an abandoned building digging up lost history, traveling the
        world with her camera, and taking risks to better herself as a person and an artist when she&apos;s
        not spending her time making her models feel like royalty.
      </p>
    </div>
    <div className="social-media">
      <a href="https://www.facebook.com/CH-Photography-351092558361890/" aria-label="Facebook Page">
        <i className="fab fa-facebook fa-2x" />
        Like me on Facebook!
      </a>
      <a href="https://www.flickr.com/" aria-label="Flickr Page">
        <i className="fab fa-flickr" />
        Follow me on Flickr!
      </a>
      <a href="https://www.instagram.com/flashyfashionfraud/?hl=en" aria-label="Instagram Page">
        <i className="fab fa-instagram" />
        Follow me on Instagram!
      </a>
    </div>
    <div className="about-portrait">
      <img src="https://dl.dropboxusercontent.com/s/g3nrp8w829wqbft/Caledonia_Portrait_Lg.png?dl=0" alt="A portait of Caledonia" />
    </div>
  </main>
);

export default AboutContent;

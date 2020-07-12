import React from 'react';

function getFullYear() {
  const d = new Date();
  const n = d.getFullYear();
  return n;
}
const Footer = () => (
  <footer id="main-footer">
    Copyright &copy; 2013-
    {getFullYear()}
    {' '}
    by Caledonia Hanson Photography.
  </footer>
);

export default Footer;

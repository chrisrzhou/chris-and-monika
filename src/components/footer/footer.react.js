import React from 'react';
import 'font-awesome-webpack';

import './footer.less';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/chrisrzhou/chris-and-monika" target="_blank">
          <i className="fa fa-code"></i>
        </a>
        {' with '}
        <i className="fa fa-heart"></i>
        {' by '}
        <a href="https://github.com/chrisrzhou" target="_blank">
          @chrisrzhou
        </a>
        {' and '}
        <a href="https://github.com/monikasun88" target="_blank">
          @monikasun88
        </a>
      </p>
    </footer>
  );
};

export default Footer;

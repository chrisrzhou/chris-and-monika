import React from 'react';
import 'font-awesome-webpack';
import { Link } from 'react-router';

import './footer.less';

export default () => {
  return (
    <footer className="footer">
      <p>
        <Link to="https://github.com/chrisrzhou/chris-and-monika" target="_blank">
          <i className="fa fa-code"></i>
        </Link>
        {' with '}
        <i className="fa fa-heart"></i>
        {' by '}
        <Link to="https://github.com/chrisrzhou" target="_blank">
          @chrisrzhou
        </Link>
        {' and '}
        <Link to="https://github.com/monikasun88" target="_blank">
          @monikasun88
        </Link>
      </p>
    </footer>
  );
};

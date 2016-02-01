import React from 'react';
import 'font-awesome-webpack';
import { Link } from 'react-router';

import './footer.less';

export default () => {
  return (
    <footer className="footer">
      <p>
        <i className="fa fa-code"></i>
        {' with '}
        <i className="fa fa-heart"></i>
        {' by '}
        <Link to="https://github.com/chrisrzhou">@chrisrzhou</Link>
        {' and '}
        <Link to="https://github.com/monikasun88">@monikasun88</Link>
      </p>
    </footer>
  );
};

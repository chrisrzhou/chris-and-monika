import React from 'react';
import { Link } from 'react-router';

import './navbar.less';

export default () => {
  return (
		<nav role="navigation">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="about-us">About Us</Link>
				</li>
				<li>
					<Link to="wedding">Wedding</Link>
				</li>
				<li>
					<Link to="rsvp">RSVP</Link>
				</li>
			</ul>
		</nav>
  );
};

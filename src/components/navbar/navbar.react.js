import React from 'react';
import './navbar.less';

export default () => {
  return (
		<nav role="navigation">
			<ul>
				<li>
					<a href="#wedding">The Wedding</a>
				</li>
				<li>
					<a href="#reception">Reception</a>
				</li>
				<li>
					<a href="#registry">Registry</a>
				</li>
				<li>
					<a href="#directions">Directions</a>
				</li>
				<li>
					<a href="#bparty">Bridal Party</a>
				</li>
			</ul>
			<div className="menu">
				<a className="menu__icon" href="#" title="Menu">
					<span className="line line-1"></span>
					<span className="line line-2"></span>
					<span className="line line-3"></span>
				</a>
			</div>
		</nav>
  );
};

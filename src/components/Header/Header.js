import React from "react";
import './Header.scss';

import CurrentDate from "../CurrentDate/CurrentDate";

class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<header className="header">
				<CurrentDate />
			</header>
		);
	}
}

export default Header;

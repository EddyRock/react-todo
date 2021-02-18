import React from "react";
import './CurrentDate.scss';

class CurrentDate extends React.Component {
	constructor() {
		super();
		this.months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		this.weekDays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		this.current = new Date();

		this.state = {
			day: this.current.getDate(),
			month: this.months[this.current.getMonth()],
			year: this.current.getFullYear(),
			weekDay: this.weekDays[this.current.getDay()],
		};
	}

	render() {
		return (
			<div className="current-date">
				<div className="current-date__left">
					<span className="current-date__day">{this.state.day}</span>
					<div className="current-date__month-year">
						<span>{this.state.month}</span>
						<span>{this.state.year}</span>
					</div>
				</div>

				<div className="current-date__right">
					<span className="current-date__day-of-week">
					{ this.state.weekDay }
				</span>
				</div>
			</div>
		);
	}
}

export default CurrentDate;

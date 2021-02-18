import React from "react";
import './InputField.scss';

class InputField extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<input
				className={`input-field ${this.props.className}`}
				onChange={this.props.onChange}
				onKeyDown={this.props.onEnter}
				type={this.props.type}
				value={this.props.value}
				placeholder="Enter task"
			/>
		);
	}
}

InputField.defaultProps = {
	type: 'text'
};

export default InputField;

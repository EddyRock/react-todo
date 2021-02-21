import React from "react";
import './Task.scss';

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		};

		this.onUpdateTask = this.onUpdateTask.bind(this);
	};

	componentDidMount() {
		this.setState({
			checked: this.props.checked,
		})
	}

	onUpdateTask() {
		const list = JSON.parse(localStorage.getItem('list')) || [];
		list[this.props.index].checked = !list[this.props.index].checked;

		localStorage.setItem('list', JSON.stringify(list));

		this.setState({
			checked: !this.props.checked,
		});

		this.props.onUpdate();
	}

	render() {
		const valueClass = this.props.checked ? 'task__value--light' : '';

		return (
			<div className="task">
				<p
					className={`task__value ${valueClass} ${this.props.className}`}
				>
					{ this.props.value }
				</p>

				<label className="task__checkbox">
					<input
						onChange={this.onUpdateTask}
						type="checkbox"
						checked={this.state.checked}
					/>
					<span className="task__checkmark"></span>
				</label>
			</div>
		);
	}
}

Task.defaultProps = {
	value: 'text',
	checked: false,
};

export default Task;

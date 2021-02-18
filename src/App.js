import React from "react";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            edit: false,
        };

        this.handleInput = this.handleInput.bind(this);
        this.setEditMode = this.setEditMode.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    handleInput(e) {
        this.setState({
            value: e.target.value
        });
    };

    handleEnter(e) {
        if (e.key === 'Enter') {
            console.log('do validate');
        }
    }

    onEnter(e) {
        if (!(e.key === 'Enter')) {
            return;
        }

        this.setNewTask(this.state.value);

        this.setState({
            value: '',
        });
        this.setEditMode();
    }

    setEditMode() {
        this.setState({
            edit: !this.state.edit
        });
    }

    setNewTask(value) {
        const id = `f${(+new Date).toString(16)}`;
        localStorage.setItem('todo-list', value);
    }

    render() {
        const edit = this.state.edit;
        let component;
        if(edit) {
            component = <InputField
                className="app__input"
                value={this.state.value}
                onChange={this.handleInput}
                onEnter={this.onEnter}
            />
        }
        return (
            <div className="app">
                <Header />
                { component }
                <button
                    onClick={this.setEditMode}
                    className="app__button"
                >+</button>
            </div>
        );
    }
}

export default App;


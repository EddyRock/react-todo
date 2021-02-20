import React from "react";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            edit: false,
            list: [],
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
        if(!value) {
            return;
        }

        const list = this.state.list;
        list.push(value);
        localStorage.setItem('list', JSON.stringify(list));

        this.setState({
            list: list,
        })
    }

    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({
            list,
        })
    }

    render() {
        const edit = this.state.edit;
        const list = this.state.list.map(item => <p>{item}</p>)

        return (
            <div className="app">
                <Header />
                {
                    edit ? <InputField
                        className="app__input"
                        value={this.state.value}
                        onChange={this.handleInput}
                        onEnter={this.onEnter}
                    /> : null
                }
                {
                    list
                }
                <button
                    onClick={this.setEditMode}
                    className="app__button"
                >+</button>
            </div>
        );
    }
}

export default App;


import React from "react";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import Task from "./components/Task/Task"

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
        this.update = this.update.bind(this);
    }

    handleInput(e) {
        this.setState({
            value: e.target.value
        });
    };

    onEnter(e) {
        if(e.key === "Escape") {
            this.setState({
                exit: false,
            });
        }

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
        list.push({value, checked: false});
        localStorage.setItem('list', JSON.stringify(list));

        this.setState({
            list: list,
        })
    }

    update() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({
            list,
        })
    }

    componentDidMount() {
        this.update();
    }

    render() {
        const edit = this.state.edit;
        const list = this.state.list
            .map((item, index) => {
                return <Task
                    onUpdate={this.update}
                    className="app__task"
                    key={index}
                    index={index}
                    checked={item.checked}
                />
            })

        return (
            <div className="app">
                <Header />
                <div className="app__content">
                    {
                        edit ? <InputField
                            value={this.state.value}
                            onChange={this.handleInput}
                            onEnter={this.onEnter}
                        /> : null
                    }
                    { list }
                </div>
                <button
                    onClick={this.setEditMode}
                    className="app__button"
                >+</button>
            </div>
        );
    }
}

export default App;


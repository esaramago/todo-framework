import React from 'react';
import Icon from '../icon/icon';
import ToDoList from '../todolist/todolist';

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="o-grid js-form" onSubmit={(e) => {e.preventDefault(); console.log(this.state.value)}}>
                    <div className="o-grid__full">
                        <label htmlFor="add" className="is-visually-hidden">{this.props.placeholder}</label>
                        <input type="text" id="add" placeholder={this.props.placeholder} className="c-input" defaultValue={this.state.value} />
                    </div>
                    <div>
                        <button type="submit" className="c-button">
                            <Icon icon="add" />
                        </button>
                    </div>
                </form>

                <ToDoList list={this.props.items} />
            </React.Fragment>
        )
    }
}

export default ToDo;
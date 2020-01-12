import React from 'react';
import Icon from '../icon/icon';
import ToDoList from '../todolist/todolist';


class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    handleInputChange(e) {
        this.setState({ content: e.target.value });
        console.log(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <form className="o-grid js-form" onSubmit={this.handleSearchTermSubmit}>
                    <div className="o-grid__full">
                        <label htmlFor="add" className="is-visually-hidden">{this.props.placeholder}</label>
                        <input type="text" id="add" placeholder={this.props.placeholder} className="c-input" value={this.state.content} onChange={this.handleInputChange} />
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
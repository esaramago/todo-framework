import React from 'react';
import Icon from '../icon/icon';
import ListItem from '../listitem/listitem';

class ToDo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="o-grid js-form">
                    <div className="o-grid__full">
                        <label htmlFor="add" className="is-visually-hidden">Add new to do!</label>
                        <input type="text" id="add" placeholder="Add new to do!" className="c-input" />
                    </div>
                    <div>
                        <button type="submit" className="c-button">
                            <Icon icon="add" />
                        </button>
                    </div>
                </form>

                <ul className="c-list">
                    <ListItem/>
                </ul>
            </React.Fragment>
        )
    }
}

export default ToDo;
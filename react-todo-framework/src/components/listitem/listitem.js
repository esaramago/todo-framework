import React from 'react';
import Icon from '../icon/icon';

class ListItem extends React.Component {
    render() {
        return (

            <li className="c-list-item">
                <div className="o-grid">
                    <div>
                        <label htmlFor="inputId" className="is-visually-hidden">Mark Item as done</label>
                        <input type="checkbox" className="c-checkbox" name="items" id="inputId"/>
                    </div>
                    <div className="o-grid__full">cdsdcsdscsdc</div>
                    <div>
                        <button type="button" className="c-button">
                            <Icon icon="remove" />
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default ListItem;
import React from 'react';
import Icon from '../icon/icon';

class ListItem extends React.Component {
    render() {
        const data = this.props.data;
        const isDone = data.isDone ? '--done' : '';
        return (
            <li className={"c-list-item " + isDone}>
                <div className="o-grid">
                    <div>
                        <label htmlFor={"item" + data.id} className="is-visually-hidden">Mark Item as done</label>
                        <input
                            type="checkbox"
                            className="c-checkbox"
                            id={"item" + data.id}
                            name="items"
                            onClick={() => {}}
                            defaultChecked={data.isDone}
                        />
                    </div>
                    <div className="o-grid__full">{data.content}</div>
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
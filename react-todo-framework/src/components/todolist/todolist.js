import React from 'react';
import ListItem from '../listitem/listitem';

class ToDoList extends React.Component {

    render() {
        const listItems = this.props.list.map((item) =>
            <ListItem
                key={item.id}
                value={item.content}
                id={item.id}
                data={item}
            />

        );
        return (
            <ul className="c-list">
                {listItems}
            </ul>
        )
    }
}

export default ToDoList;
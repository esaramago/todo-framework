import React from 'react';
import Header from '../header/header';
import ToDo from '../todo/todo';

const data = {
    title: 'React',
    placeholder: 'Add new to do!',
    items: []
}


function init() {
    var storage = localStorage.getItem('todo-items');
    if (storage && storage !== 'undefined') {
        data.items = JSON.parse(storage);
    }
}
init();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header title={data.title}></Header>
                <main className="c-main">
                    <ToDo placeholder={data.placeholder} items={data.items} />
                </main>
            </React.Fragment>
        );
    }
}

export default App;

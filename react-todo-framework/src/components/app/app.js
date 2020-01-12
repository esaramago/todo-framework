import React from 'react';
import Header from '../header/header';
import ToDo from '../todo/todo';

const data = {
    title: 'React'
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header title={data.title}></Header>
                <main className="c-main">
                    <ToDo/>
                </main>
            </React.Fragment>
        );
    }
}

export default App;

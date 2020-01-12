import React from 'react';
import Icon from '../icon/icon';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="c-header">
                <Icon icon="logo" size="lg" />
                <h1 className="c-heading">
                    ToDo <span className="c-heading__strong">{this.props.title}</span>
                </h1>
            </header>
        )
    }
}

export default Header;

import React from 'react';
import './icon.css';
import icons from '../../img/sprite.svg';

class Icon extends React.Component {
    render() {
        return (
            <svg className={"c-icon --" + this.props.size}>
                <use xlinkHref={`${icons}#icon-${this.props.icon}`}></use>
            </svg>
        )
    }
}

export default Icon;
import React, { Component } from 'react';
import './Button.module.css';

export default class Button extends Component {
    isOperator = value => {
        return !isNaN(value) || value === '.' || value === '=';
    };

    render() {
        return (
            <div>
                className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}
                onClick={() => this.props.handleClick(this.props.children)}
                >
                {this.props.children}
            </div>
        );
    };
}
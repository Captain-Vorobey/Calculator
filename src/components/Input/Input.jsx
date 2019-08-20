import React, { Component } from 'react';
import './Input.module.css'

class Input extends Component {
    render() {
        return (
            <div className="input">
                {this.props.children}
            </div>
        );
    };
}

export default Input;
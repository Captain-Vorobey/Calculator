import React, { Component } from 'react';
import classes from './ClearButton.module.css';

export default class ClearButton extends Component {
    render() {
        return (
            <div className={classes.clearBtn}
                 onClick={() => this.props.handleClear()}>
                {this.props.children}
            </div>
        );
    };
}
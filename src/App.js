import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import Imagine from './Без названия.jpg'

class App extends Component {
  state = {
    input: '',
    prevNumber: '',
    currentNumber: '',
    operator: ''
  };

  addDecimal = value => {
    if(this.state.input.indexOf('.') === -1) {
      this.setState({
        input: this.state.input + value
      });
    }
  };
  clearInput = () => {
    this.setState({
      input: ''
    });
  };

  addToInput = value => {
    this.setState({
      input: this.state.input + value
    })
  };
  addZeroToInput = value => {
    if(this.state.input !== '') {
      this.setState({
        input: this.state.input + value
      });
    }
  };

  add = () => {
    this.state.prevNumber = this.state.input;
    this.setState({
      input: ''
    });
    this.state.operator = 'plus';
  };
  del = () => {
    this.state.prevNumber = this.state.input;
    this.setState({
      input: ''
    });
    this.state.operator = 'del';
  };
  sub = () => {
    this.state.prevNumber = this.state.input;
    this.setState({
      input: ''
    });
    this.state.operator = 'sub';
  };

  mul = () => {
    this.state.prevNumber = this.state.input;
    this.setState({
      input: ''
    });
    this.state.operator = 'mul';
  };
  evaluation = () => {
    this.state.currentNumber = this.state.input;
    if(this.state.operator === 'plus') {
      this.setState({
        input: parseFloat((parseFloat(this.state.prevNumber) + parseFloat(this.state.currentNumber)).toFixed(4))
      });
    }
    else if(this.state.operator === 'mul') {
      this.setState({
        input: parseFloat((parseFloat(this.state.prevNumber) * parseFloat(this.state.currentNumber)).toFixed(4))
      });
    }
    else if(this.state.operator === 'sub') {
      this.setState({
        input: parseFloat((parseFloat(this.state.prevNumber) - parseFloat(this.state.currentNumber)).toFixed(4))
      });
    }
    else if(this.state.operator === 'del') {
      this.setState({
        input: parseFloat((parseFloat(this.state.prevNumber) / parseFloat(this.state.currentNumber)).toFixed(4))
      });
    }
  };

  render() {
    return (
        <body className="App" background={Imagine}>
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.del}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.mul}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluation}>=</Button>
            <Button handleClick={this.sub}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
        </body>
    );
  }
}
export default App;

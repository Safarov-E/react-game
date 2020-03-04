import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  clickHandler = event => {
    
  }
  render() {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
      </div>
    );
  }
}

export default App;

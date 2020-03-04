import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      dagger: 0,
      zero: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? "X" : "O";
    for(let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if(this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
          alert(s + 'win');
          setTimeout(() => {
            this.setState({
              squares: Array(9).fill(null),
              count: 0
            })
          }, 1000)
        }
    }
  }
  componentDidUpdate() {
    let element = document.querySelectorAll('.ttt-grid');
    for(let i = 0; i < element.length; i++) {
      if(element[i].textContent === "X") {
        element[i].classList.add('dagger')
        element[i].classList.remove('zero')
      } else if(element[i].textContent === "O") {
        element[i].classList.add('zero')
        element[i].classList.remove('dagger')
      }
    }
    if(element[0].textContent !== '' &&
        element[1].textContent !== '' &&
        element[2].textContent !== '' &&
        element[3].textContent !== '' &&
        element[4].textContent !== '' &&
        element[5].textContent !== '' &&
        element[6].textContent !== '' &&
        element[7].textContent !== '' &&
        element[8].textContent !== '') {
          alert('Результат игры ничья')
          setTimeout(() => {
            this.setState({
              squares: Array(9).fill(null),
              count: 0
            })
          }, 1000)
        }
  }
  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    if(currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? "X" : "O";
      this.setState({
        squares: currentSquares,
        count: this.state.count + 1
      });
    } else {
      alert('Так  нельзя!!!');
    }
    this.isWinner();
  }
  newGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      count: 0
    })
  }
  render() {
    return (
      <>
        <button className="newGame" onClick={this.newGame}>Новая игра</button>
        <div className="score">
            <p>X: <span>{this.state.dagger}</span></p>
            <p>O: <span>{this.state.zero}</span></p>
        </div>
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
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
function Board(props) {
  let boardArr = props.value.map((item, index) => {
    return <li className="square" key={index} onClick={props.boardClick(index)}>{item}</li>
  })
  return (
    <ul className="board">
      {boardArr}
    </ul>
  )
}
function Tips(props) {
  let boardArr = props.value.map((item, index) => {
    let text = `#${index + 1} ${item.role} Move to ${item.site}`
    return <li className="tip" key={index} >{text}</li>
  })
  return (
    <div>
      <h3>Next player: {props.next}</h3>
      <ul className="tips">
        {boardArr}
      </ul>
    </div>
  )
}
class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: new Array(9).fill(null),
      tips: [],
      next: 'X'
    }
    this.flag = true
    this.playChess = this.playChess.bind(this)
  }
  playChess(index) {
    return () => {
      this.setState((pre) => {
        let board = pre.board
        let tips = pre.tips
        let next = pre.next
        if(!board[index]) {
          board[index] = next
          next = next === 'O' ? 'X' : 'O'
          tips.push({site: index + 1, role: board[index]})
        }
        return {board, tips, next}
      }, () => {
        this.howToWin(this.state.board)
      })
    }
  }
  howToWin(board) {
    let winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    let flag = false
    for (let item of winCondition) {
      if (board[item[0]] === board[item[1]] && board[item[0]] === board[item[2]]) {
        flag = board[item[0]]
      }
    }
    if (flag) {
      alert(flag + ' win')
      this.setState({
        board: new Array(9).fill(null),
        tips: [],
        next: 'X'
      })
    }
  }
  render() {
    return (
      <div className="main">
        <Board value={this.state.board} boardClick={this.playChess} />
        <Tips value={this.state.tips} next={this.state.next}/>
      </div>
    )
  }
}
export default Game

import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.restart = this.restart.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let y = 0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    let board2 = JSON.stringify(board);
    let winnable = this.isSolvable(board2);
    return winnable?board:this.createBoard();
  }

  //TODO: check if the board is winnable.
  isSolvable(boardt) {
    let board = JSON.parse(boardt);
    for(let y = 0; y < this.props.nrows-1; y++){
      for(let x = 0; x < this.props.ncols; x++){
        if(board[y][x]){
          toggle(y+1,x);
        }
      }
    }
    function toggle(y,x) {
      flip(y,x);
      flip(y+1,x);
      flip(y-1,x);
      flip(y,x+1);
      flip(y,x-1);
    }
    function flip(y, x) {
      if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        board[y][x] = !board[y][x];
      }
    }
    const possibleLastRows = [[true,false,false,false,true],[false,true,false,true,false],[true,true,true,false,false],[false,false,true,true,true],[true,false,true,true,false],[false,true,true,false,true],[true,true,false,true,true]];
    for(let i = 0; i < possibleLastRows.length; i++) {
      if(board[4].toString() === possibleLastRows[i].toString()){
        return true;
      }else{
        return false;
      }
    }
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log('Flipping'+coord);
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y,x);
    flipCell(y-1,x);
    flipCell(y+1,x);
    flipCell(y,x-1);
    flipCell(y,x+1);
    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));
    console.log(hasWon);
    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */
  makeTable() {
    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className='Board'>
        <tbody>{tblBoard}</tbody>
      </table>
    );
  }
  restart() {
    this.setState({board: this.createBoard(), hasWon: false});
  }
  render() {
    return (
      <div>
        {this.state.hasWon ? (
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
            <div><button className='btn' onClick={this.restart}>Play Again?</button></div>
          </div>
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            {this.makeTable()}
          </div>
        )}
      </div>
    );
  }
}

export default Board;

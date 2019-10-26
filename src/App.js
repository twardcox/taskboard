import React from 'react';
import './App.css';
import Board from './components/board.jsx'

export default class App extends React.Component{

  constructor(){
    super()

    this.state ={ 
      boards: [
      {
        id: 0,
        title: 'Backlog',
        cards: [
          {id: 0, title: 'Write Blog', description: 'Can AI make memes'},
          {id: 1, title: 'Pay Rent', description: 'Transfer via NEFT'}
        ]
      },
      {
        id: 1,
        title: 'In-Progress',
        cards: []
      },
      {
        id: 2,
        title: 'Done',
        cards: []
      }
    ],
    newBoard: ""
  }
  this.createBoard = this.createBoard.bind(this)
  this.createCard = this.createCard.bind(this)
  this.moveCard = this.moveCard.bind(this)
  }
  // TODO: Make function that creates boards
  createBoard = () => {
    console.log(`this.state.newBoard ${this.state.newBoard}`)
    console.log(`this.state.boards 1 ${this.state.boards}`);
    let createBoard = {
      id: this.state.boards.length,
      title: this.state.newBoard,
      cards: []
    };
    let currentBoards = this.state.boards;
    currentBoards.push(createBoard)
    this.setState({boards: currentBoards})
    console.log(`this.state.boards 2 ${this.state.boards}`);
    // this.setState({ boards: this.state.boards.push({id: this.state.boards.length - 1, title: this.state.newBoard, cards: []})})
  }

  // this.setState({ myArray: this.state.myArray.push('new value') })

  // TODO: Make function that creates cards
  createCard = (e) => {
    this.setState({cards: this.state.cards.push({id: this.props.id, title: e.title, description: e.description})})
    
  }
  
  // TODO: Make function that moves card from previous board to next board
  moveCard = (props) => {
    // let cardNum = e.target.value;
    let boardNum = props.boardNum;
    console.log('boardNum: ', boardNum);
    // console.log('cardNum: ', cardNum);
    

    // let index = this.state.boards
    // console.log('this.props.key: ', this.props.key);
    // console.log('index: ', index);

    // use splice to remove specific card then push it into new board
    // let removedCard = this.setState({cards: this.state.cards.splice([index], 1)})
    // console.log('removedCard: ', removedCard);

  }

setNewBoardName = (e) =>{
  e.preventDefault()
  this.setState({newBoard: e.target.value})

}


render(){
  return(
    <div>

      <div className="card-deck">
      
      {this.state.boards.map((board, idx) => 
        <Board value={idx} key={idx} id={board.id} title={board.title} cards={board.cards} moveCard={this.moveCard}></Board>
      )}

      </div>
      
        <label htmlFor="boardTitle">New Board</label>
        <input onChange={this.setNewBoardName} type="text" name="boardTitle" value={this.state.newBoard} ></input>

      <button onClick={this.createBoard}>Create</button>
      
    </div>
  )
}

}

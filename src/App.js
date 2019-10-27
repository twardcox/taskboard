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
    newBoard: "",
    newCardTitle: "",
    newCardDescription: ""
  }
  this.createBoard = this.createBoard.bind(this)
  this.createCard = this.createCard.bind(this)
  this.moveCard = this.moveCard.bind(this)
  this.setNewBoardName = this.setNewBoardName.bind(this)
  this.setNewCardDescription = this.setNewCardDescription.bind(this)
  this.setNewCardTitle = this.setNewCardTitle.bind(this)
  }
  // TODO: Make function that creates boards
  createBoard = () => {

    let createBoard = {
      id: this.state.boards.length,
      title: this.state.newBoard,
      cards: []
    };

    let currentBoards = this.state.boards;
    currentBoards.push(createBoard)

    this.setState({boards: currentBoards})

  }

  // this.setState({ myArray: this.state.myArray.push('new value') })

  // TODO: Make function that creates cards
  createCard = () => {
    let newCard = {id: this.state.boards[0].cards.length, title: this.state.newCardTitle, description: this.state.newCardDescription}
    let currentCards = this.state.boards[0].cards
    currentCards.push(newCard)
    this.setState({cards: currentCards})

  }
  
  // TODO: Make function that moves card from previous board to next board
  moveCard = (e) => {
    console.log('old state', this.state.boards);

    let cardNum = parseInt(e.target.value[2]);
    let boardNum = parseInt(e.target.value[0]);
    let nextBoard = boardNum;
    let direction = e.target.value[4]

    if (boardNum === 0 && direction === "p"){
      return;
    } else if(direction === "p"){
      nextBoard--;
    }

    if (boardNum === this.state.boards.length - 1 && direction === "n"){
      return;
    } else if (direction === "n"){
      nextBoard++
    }


    let removeCard = this.state.boards[boardNum].cards.splice([cardNum], 1)
    console.log('removeCard: ', removeCard);
    this.state.boards[nextBoard].cards.push(...removeCard)
    let newState = this.state.boards
    console.log('newState: ', newState);

    // use splice to remove specific card then push it into new board
    this.setState({boards: newState})


  }

setNewBoardName = (e) =>{
  e.preventDefault()
  this.setState({newBoard: e.target.value})

}

setNewCardTitle = (e) =>{
  e.preventDefault()
  this.setState({newCardTitle: e.target.value})

}

setNewCardDescription = (e) =>{
  e.preventDefault()
  this.setState({newCardDescription: e.target.value})

}


render(){
  return(
    <div>

      <div className="card-deck">
      
      {this.state.boards.map((board, idx) => 
        <Board value={idx} key={idx} id={board.id} title={board.title} cards={board.cards} moveCard={this.moveCard} setNewCardTitle={this.setNewCardTitle} setNewCardDescription={this.setNewCardDescription} createCard={this.createCard}></Board>
      )}

      </div>

      <div>
        <label htmlFor="boardTitle">New Board</label>
        <input onChange={this.setNewBoardName} type="text" name="boardTitle" value={this.state.newBoard} ></input>

      <button onClick={this.createBoard}>Create</button>
      </div>
      <div>
      <label>Create New Task</label>
        <label htmlFor="newTitle">Title</label>
        <input onChange={this.setNewCardTitle} type="text" name="newTitle" value={this.newCardTitle} ></input>
        <label htmlFor="newDescription">Description</label> 
        <input onChange={this.setNewCardDescription} type="text" name="newDescription" value={this.newCardDescription} ></input>
      <button onClick={this.createCard}>Create</button>
      </div>
    </div>
  )
}

}

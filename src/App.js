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

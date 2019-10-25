import React from 'react';
import './App.css';
import Board from './components/board.jsx'

export default class App extends React.Component{

  constructor(){
    super()

    this.state ={ 
      boards: [
      {
        id: 'board1',
        title: 'Backlog',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes'},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT'}
        ]
      },
      {
        id: 'board2',
        title: 'In-Progress',
        cards: []
      },
      {
        id: 'board3',
        title: 'Done',
        cards: []
      }
    ]
  }
  this.createBoard = this.createBoard.bind(this)
  this.createCard = this.createCard.bind(this)
  }
  // TODO: Make function that creates boards
  createBoard = (e) => {
    this.setState({ boards: this.state.boards.push({id: `board${this.state.boards.length + 1}`, title: e.title, cards: []})})
  }

  // this.setState({ myArray: this.state.myArray.push('new value') })

  // TODO: Make function that creates cards
  createCard = (e) => {
    this.setState({cards: this.state.cards.push({id: `Card${this.state.cards.length + 1}`, title: e.title, description: e.description, label: e.label})})
    
  }
  
  // TODO: Make function that moves card from previous board to next board
  // moveCard = (e) => {
  //   let index = this.state.cards[e.key]
  //   // use splice to remove specific card then push it into new board
  //   let removedCard = this.setState({cards: this.state.cards.splice([index], 1)})
  // }


render(){
  return(
    <div>
    {this.state.boards.map((board, idx) => 
      <Board key={idx} id={board.id} title={board.title} cards={board.cards}></Board>
    )}

    </div>
  )
}





}

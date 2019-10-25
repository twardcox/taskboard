import React from 'react';
import Task from './Task.jsx'

const Board = (props) =>{
  return(
    <div>

      <h1>{props.title}</h1>

      {props.cards.map((card, idx) => 
      <Task key={idx} id={card.id} title={card.title} description={card.description}></Task>
    )}
    </div>
  )

}

export default Board;
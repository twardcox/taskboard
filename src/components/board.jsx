import React from 'react';
import Task from './Task.jsx';




const Board = (props) =>{
  console.log('board props: ', props);

  return(
    <div value={props.id} className="card">

      <div className="card-header bg-primary">{props.title}{props.id}</div>
      <div className="card-body text-center" >
      {props.cards.map((card, idx) => 
      <Task boardNum={props.id} key={idx} id={idx} title={card.title} description={card.description} moveCard={props.moveCard}></Task>
    )}
    </div>
    <div className="card-footer  bg-primary"></div>
    </div>
  )

}

export default Board;
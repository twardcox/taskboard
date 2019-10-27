import React from 'react';

const Task = (props) => {

  return(
    <div className="card">

      <label htmlFor="description">{props.title}</label>
      <label type="text" name="description" value={props.description} >{props.description}</label>

      <span>
        <button className="previous" onClick={props.moveCard} value={[props.boardNum, props.id, "p"]}>&laquo;</button>
        <button className="next" onClick={props.moveCard} value={[props.boardNum, props.id, "n"]}> &raquo;</button>
      </span>

    </div>
  )
}

export default Task;
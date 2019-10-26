import React from 'react';

const Task = (props) => {

  return(
    <div className="card">

      <label htmlFor="description">{props.title}</label>
      <label type="text" name="description" value={props.description} >{props.description}</label>

      <span>
        <button className="previous" onClick={props.moveCard}>&laquo;</button>
      <button className="next" onClick={props.moveCard}> &raquo;</button>
      </span>

    </div>
  )
}

export default Task;
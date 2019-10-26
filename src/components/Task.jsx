import React from 'react';

const Task = (props) => {
  console.log('props: ', props.boardNum);

  return(
    <div className="card">

      <label htmlFor="description">{props.title}</label>
      <label htmlFor="description">{props.id}</label>
      <label type="text" name="description" value={props.description} ></label>

      <span>
        <button className="previous" onClick={props.moveCard}>&laquo;</button>
      <button className="next" onClick={props.moveCard}> &raquo;</button>
      </span>

    </div>
  )
}

export default Task;
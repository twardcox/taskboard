import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault()
}


const Task = (props) => {

        {/* {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes'}, */}
  return(
    <div >
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">{props.title}</label>
      {/* TODO: get ternary operator to work with strings */}
      {props.description !== "" ? <h4>{props.description}</h4> : <h1>here</h1>}
      {/* <input type="text" name="description"></input> */}
    </form>
    </div>
  )
}

export default Task;
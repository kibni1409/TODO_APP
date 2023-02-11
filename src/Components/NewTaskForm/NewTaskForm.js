import React from 'react'
import './NewTaskForm.css'
import { PropTypes } from 'prop-types'
const NewTaskForm = (props) => {
  function keyDown(e) {
    if (e.key === 'Enter') {
      props.addTask(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input onKeyDown={keyDown} className="new-todo" placeholder="What needs to be done?" autoFocus></input>
    </header>
  )
}

NewTaskForm.defaultProps = {
  addTask: () => {},
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}

export default NewTaskForm

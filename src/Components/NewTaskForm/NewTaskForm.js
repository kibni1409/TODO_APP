import React from "react";
import "./NewTaskForm.css"
const NewTaskForm = ( props ) => {
    function keyDown ( e ) {
        if ( e.key === "Enter" ){
            props.addTask( e.target.value )
            e.target.value = ""
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                onKeyDown={ keyDown }
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus>
            </input>
        </header>
    )
}

export default NewTaskForm;
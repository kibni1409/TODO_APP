import React from "react";
import "./Footer.css"
import TasksFilter from "../TasksFilter/TasksFilter";
function Footer( props ) {

    let count = props.Tasks.reduce( ( sum, current) => current.type === "view"? sum + 1 : sum + 0, 0)
    return (
        <footer className="footer">
            <span className="todo-count">{ count } items left</span>
            <TasksFilter
                Sort={ props.Sort }
                sortChange={ props.sortChange }
            />
            <button className="clear-completed" onClick={ props.clearCompleted }>Clear completed</button>
        </footer>
    )
}

export default Footer;
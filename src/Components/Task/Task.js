import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import "./Task.css"
function Task ( props ) {
    return (
        <li className={ props.type? props.type : null }>
            <div className="view">
                <input className="toggle" type="checkbox"></input>
                    <label>
                        <span className="description">{ props.description }</span>
                        <span className="created">
                            { formatDistanceToNow(new Date(2023, 1, 6, 13, 49, 15)) }
                        </span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
            </div>
            { props.type === "editing" ? <input type="text" className="edit" value={ props.description }></input> : null }
        </li>
    )
}

export default Task;
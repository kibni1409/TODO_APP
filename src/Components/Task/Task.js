import React from "react";
import "./Task.css"
function Task ( props ) {
    return (
        <li className={ props.type? props.type : null }>
            <div className="view">
                <input className="toggle" type="checkbox"></input>
                    <label>
                        <span className="description">{ props.description }</span>
                        <span className="created">created 17 seconds ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
            </div>
            { props.type === "editing" ? <input type="text" onChange={ () => {} } className="edit" value={ props.description }></input> : null }
        </li>
    )
}

export default Task;
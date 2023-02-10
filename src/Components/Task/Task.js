import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import "./Task.css"

const Task = ( props ) => {

    function keyDown( e ) {
        if ( e.key === "Enter" ) {
            props.onTypeChange( props.task.id, "view" )
            props.onEdited( props.task.id, e.target.value )
        }
    }

    function Check(){
        props.onTypeChange( props.task.id, props.task.type === "completed" ? "view" : "completed" )
    }

    function Edit(){
        props.onTypeChange( props.task.id, "editing" )
    }

    function Destroy(){
        props.onDeleted( props.task.id )
    }

    return (
        <li className={ props.task.type ? props.task.type : null }>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    onClick={ Check }
                    onChange={ ()=>{} }
                    checked={ props.task.type === "completed" }
                ></input>
                <label>
                <span className="description">
                    {props.task.description}
                </span>
                <span className="created">
                     {formatDistanceToNow(new Date(
                         props.task.time.year,
                         props.task.time.month,
                         props.task.time.date,
                         props.task.time.hours,
                         props.task.time.minutes,
                         props.task.time.seconds
                      ))}
                </span>
                </label>
                <button className="icon icon-edit" onClick={ Edit }></button>
                <button onClick={ Destroy } className="icon icon-destroy"></button>
            </div>
            { props.task.type === "editing"
                ? <input
                    type="text"
                    className="edit"
                    defaultValue={ props.task.description }
                    onKeyDown={ keyDown }>
                </input>
                : null }
        </li>
    )
}

export default Task;
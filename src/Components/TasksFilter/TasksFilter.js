import React from "react";
import "./TaskFilter.css"
function TasksFilter ( props ) {

    const onChange = (e) =>{
        props.sortChange(e.target.innerText)
    }

    let sortElement = props.Sort.map( el =>
        <li key={el.name} >
            {el.active
                ?  <button className="selected" >{ el.name }</button>
                :  <button onClick={ onChange } >{ el.name }</button> }
        </li> )
    return (
        <ul className="filters">
            { sortElement }
        </ul>
    )
}

export default TasksFilter;
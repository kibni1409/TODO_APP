import Task from "../Task/Task";
import React from "react";
import "./TaskList.css"

const TaskList = ( props ) => {

    let typeSort = props.Sort.find( el => el.active === true )

    let ElementsTasks

    switch (typeSort.name){
        case("All"):
             ElementsTasks = props.Tasks.map( el => el)
            break
        case("Active"):
             ElementsTasks = props.Tasks.filter( el =>el.type === "view")
            break
        case("Completed"):
            ElementsTasks = props.Tasks.filter( el => el.type === "completed")
    }

    let NewElementsTasks = ElementsTasks.map( el =>
        <Task
            task={el}
            key={el.id}
            onTypeChange={props.onTypeChange}
            onDeleted={props.onDeleted}
            onEdited={props.onEdited}
        />
    )

    return <div>
        <ul className="todoList">
            { NewElementsTasks }
        </ul>
    </div>
}


export default TaskList;
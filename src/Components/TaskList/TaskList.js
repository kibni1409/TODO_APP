import Task from "../Task/Task";
import "./TaskList.css"

function TaskList() {
    return (
        <div>
            <ul className="todoList">
                <Task
                    type={"completed"}
                    description={"Completed task"}
                />
                <Task
                    type={"editing"}
                    description={"Editing task"}
                />
                <Task
                    description={"Completed task"}
                />
            </ul>
        </div>
    )
}

export default TaskList;
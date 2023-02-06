import Task from "../Task/Task";
import React from "react";
import "./TaskList.css"

class TaskList extends React.Component {

    state = {
        Tasks: [
            {id: 0, type: "completed", description: "Completed task"},
            {id: 1, type: "editing", description: "Editing task"},
            {id: 2, type: "view", description: "Completed task"},
        ]
    }

    onEdited = ( id, type ) => {
        this.setState(( { Tasks } ) => {
            const res = Tasks.map( el => el.id === id
            ? el.type = type
            : el.type )

            return {
                ...res,
            }
        } )
    }

    onDeleted = ( id ) => {
        this.setState(( { Tasks } ) => {
            const idx = Tasks.findIndex( el => el.id === id )

            const res = [
                ...Tasks.slice( 0, idx ),
                ...Tasks.slice( idx + 1 )
            ]

            return {
                Tasks: res
            }
        } )
    }

    render() {
        return <div>
            <ul className="todoList">
                {this.state.Tasks.map( el =>
                    <Task
                        id={ el.id }
                        key={ el.id }
                        type={ el.type }
                        description={ el.description }
                        onEdited={ this.onEdited }
                        onDeleted={ this.onDeleted }
                    /> )
                }
            </ul>
        </div>
    }
}

export default TaskList;
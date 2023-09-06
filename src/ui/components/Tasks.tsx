import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectTasks} from "bll/selectors";
import {TaskType} from "bll/reducers/tasksReducer";
import {EditableSpan} from "ui/components/universal/EditableSpan";
import {Task} from "ui/components/Task";

export const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)
    return (
        <div>
            <div>
                <input/>
                <button>Add Task</button>
            </div>

            {tasks.map(
                ({id, title, isDone}: TaskType) => (
                    <Task key={id} taskId={id} title={title} isDone={isDone}/>

                )
            )}
        </div>
    );
};


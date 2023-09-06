import React from 'react';
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {EditableSpan} from "ui/components/universal/EditableSpan";
import {useDispatch} from "react-redux";
import {changeTaskStatus, changeTaskTitle} from "bll/actions/tasksActions";

type TaskComponentType = {
    taskId:string
    title: string
    isDone: boolean
}
export const Task = ({taskId,title, isDone}: TaskComponentType) => {
    const dispatch = useDispatch()
    const onChange = (e: CheckboxChangeEvent) => {
       dispatch(changeTaskStatus(taskId,e.target.checked))
    };
    const onChangeHandler = ( newValue: string) => {
        dispatch(changeTaskTitle(taskId, newValue))
    }
    return (
        <div>
            <Checkbox
                checked={isDone}
                onChange={onChange}/>
            <EditableSpan value={title} onChange={onChangeHandler}/>
        </div>
    );
};


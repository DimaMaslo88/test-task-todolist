import React, {ChangeEvent} from 'react';
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {EditableSpan} from "ui/components/universal/EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {changeTaskStatus, changeTaskTitle, filterCheckedItems, setCheckedItems} from "bll/actions/tasksActions";
import {selectCheckedItems} from "bll/selectors";
import style from 'styles/Tasks.module.css'
import {ToolTip} from "ui/components/tooltip/ToolTip";

type TaskComponentType = {
    taskId: string
    title: string
    isDone: boolean
}
export const Task = ({taskId, title, isDone}: TaskComponentType) => {
    const dispatch = useDispatch()
    const items = useSelector(selectCheckedItems)
    // const onChange = (e: CheckboxChangeEvent) => {
    //     dispatch(changeTaskStatus(taskId, e.target.checked))
    // };
    const changeCheckedItems = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            dispatch(changeTaskStatus(taskId, e.target.checked))
            dispatch(setCheckedItems([e.target.value]))
        } else {
            dispatch(changeTaskStatus(taskId, e.target.checked))
            dispatch(filterCheckedItems(items.filter(item => item !== e.target.value)))
        }
    }

    const onChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitle(taskId, newValue))
    }
    return (
        <div className={style.task}>
            <div className={style.checkbox}>
                <Checkbox
                    checked={isDone}
                    value={taskId}
                    onChange={changeCheckedItems}/>
            </div>
            <ToolTip text='двойной клик,для изменения заголовка'>
                <div className={style.editableSpan}>
                    <EditableSpan value={title} onChange={onChangeHandler} status={isDone}/>
                </div>
            </ToolTip>
        </div>
    );
};


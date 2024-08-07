import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCheckedItems, selectFilter, selectTasks} from "bll/selectors";
import {TaskType} from "bll/reducers/tasksReducer";
import {Task} from "ui/components/Task";
import {
    addTask,
    filterCheckedItems,
    filterTasksByStatus, removeTask,
    removeTasksStatus,
} from "bll/actions/tasksActions";
import style from 'styles/Tasks.module.css'
import s from 'styles/input.module.css'
import {DeleteOutlined} from "@ant-design/icons";
import {ToolTip} from "ui/components/tooltip/ToolTip";

export const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)
    const filters = useSelector(selectFilter)
    const checkedItems = useSelector(selectCheckedItems)
    const [value, setValue] = useState<string>('')
    const removeTaskHandler = (id: string) => {
        dispatch(removeTask(id))
        dispatch(filterCheckedItems(checkedItems.filter(item => item !== id)))
    }
    const rightValue = value.trim()
    let filterTasks = tasks
    if (filters === 'active') {
        filterTasks = tasks.filter(f => !f.isDone)
    }
    if (filters === 'completed') {
        filterTasks = tasks.filter(f => f.isDone)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }
    const addTaskHandler = () => {
        if (value.trim() !== '') {
            dispatch(addTask(value))
            setValue("")
        }
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }
    const onAllClickHandler = () => {

        dispatch(filterTasksByStatus('all'))
    }
    const onActiveClickHandler = () => {

        dispatch(filterTasksByStatus('active'))
    }
    const onCompletedClickHandler = () => {

        dispatch(filterTasksByStatus('completed'))
    }
    const clearFilterHandler = () => {
        dispatch(removeTasksStatus(false))
        dispatch(filterCheckedItems([]))

    }

    return (
        <div className={style.tasksContainer}>
            <div className={style.searchContainer}>
                <input
                    placeholder='needs to be done'
                    value={value}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                    className={s.input}
                />
                <button
                    disabled={!rightValue}
                    onClick={addTaskHandler}
                    className={rightValue ? style.activeBtn : style.notActiveBtn}
                >Add Needs
                </button>
            </div>
            <div className={style.taskBlock}>
                {filterTasks.map(
                    ({id, title, isDone}: TaskType) => (
                        <ul key={id} className={style.ul}>
                            <li className={style.li}>
                                <Task key={id} taskId={id} title={title} isDone={isDone}/>
                            </li>
                            <ToolTip text="Удалить задание">
                                <DeleteOutlined className={style.icon} onClick={() => removeTaskHandler(id)}/>
                            </ToolTip>
                        </ul>


                    )
                )}
            </div>
            {/* создать универсальную кнопку */}
            <div className={style.buttonContainer}>
                <div style={{color: 'grey'}}>
                    {checkedItems.length} items left
                </div>

                <button onClick={onAllClickHandler}
                        className={filters === 'all' ? style.activeBtn : style.notActiveBtn}>
                    All
                </button>
                <button onClick={onActiveClickHandler}
                        className={filters === 'active' ? style.activeBtn : style.notActiveBtn}>
                    Active
                </button>
                <button onClick={onCompletedClickHandler}
                        className={filters === 'completed' ? style.activeBtn : style.notActiveBtn}>
                    Completed
                </button>
                <button onClick={clearFilterHandler} className={checkedItems.length === 0?style.noButtonFilter:style.buttonFilter}>Clear completed</button>
            </div>

        </div>
    );
};


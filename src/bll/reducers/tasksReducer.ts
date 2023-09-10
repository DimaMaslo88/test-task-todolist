import {
    AddTaskType,
    ChangeTaskStatusType,
    ChangeTaskType, FilterCheckedItemsType,
    FilterTasksByStatusType, RemoveTasksStatusType,
    SetCheckedItemsType
} from "bll/actions/tasksActions";
import {v1} from "uuid";

const tasksState: TasksStateType = {
    tasks: [
        {id: v1(), title: "Тестовое задание", isDone: false}
    ],
    filter: 'all',
    checkedId: []

}

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}
export type FilterTaskType = 'all' | 'active' | 'completed'


export type TasksStateType = {
    tasks: TaskType[]
    filter: FilterTaskType
    checkedId: string[]
}

export type TasksActionType = AddTaskType
    | ChangeTaskType
    | ChangeTaskStatusType
    | FilterTasksByStatusType
    | SetCheckedItemsType
    | FilterCheckedItemsType
    | RemoveTasksStatusType
export const TasksReducer = (state: TasksStateType = tasksState, action: TasksActionType): TasksStateType => {
    switch (action.type) {
        case "ADD-TASK": {
            const newTask: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false,

            }
            return {...state, tasks: [...state.tasks, newTask]}
        }
        case "CHANGE-TASK-TITLE": {
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id ? {...task, title: action.value} : task)
            }
        }
        case "CHANGE-TASK-STATUS": {
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id ? {...task, isDone: action.status} : task)
            }
        }
        case "FILTER-TASKS-BY-STATUS": {

            return {
                ...state, filter: action.filter
            }
        }
        case "SET-CHECKED-ITEMS": {
            return {...state, checkedId: [...state.checkedId, ...action.checkedId]}
        }
        case "FILTER-CHECKED-ITEMS": {
            return {...state, checkedId: action.filterCheckedId}
        }
        case "REMOVE-TASKS-STATUS":{
            return {...state,tasks: state.tasks.map(task=>task?{...task,isDone:action.remove}:task)}
        }
        default:
            return state
    }
}

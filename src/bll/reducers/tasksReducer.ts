import {AddTaskType, ChangeTaskStatusType, ChangeTaskType} from "bll/actions/tasksActions";
import {v1} from "uuid";

const tasksState: TasksStateType = {
    tasks: [
        {id: v1(), title: "Тестовое задание", isDone: false}
    ]
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = {
    tasks: TaskType[]
}
export type TasksActionType = AddTaskType
    | ChangeTaskType
    | ChangeTaskStatusType

export const TasksReducer = (state: TasksStateType = tasksState, action: TasksActionType): TasksStateType => {
    switch (action.type) {
        case "ADD-TASK": {
            const newTask = {
                id: v1(),
                title: action.title,
                isDone: false
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
        default:
            return state
    }
}

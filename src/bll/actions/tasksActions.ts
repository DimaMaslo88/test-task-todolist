import {FilterTaskType} from "bll/reducers/tasksReducer";

export type AddTaskType = ReturnType<typeof addTask>
export const addTask = (title: string) => {
    return {
        type: 'ADD-TASK',
        title
    } as const
}
export type ChangeTaskType = ReturnType<typeof changeTaskTitle>
export const changeTaskTitle = (id: string, value: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        id,
        value
    } as const
}
export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatus>
export const changeTaskStatus = (id: string, status: boolean) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        id,
        status
    } as const
}
export type FilterTasksByStatusType = ReturnType<typeof filterTasksByStatus>
export const filterTasksByStatus = (filter: FilterTaskType) => {
    return {
        type: 'FILTER-TASKS-BY-STATUS',
        filter
    } as const

}
export type SetCheckedItemsType = ReturnType<typeof setCheckedItems>
export const setCheckedItems = (checkedId: string[]) => {
    return {
        type: 'SET-CHECKED-ITEMS',
        checkedId
    }as const
}
export type FilterCheckedItemsType = ReturnType<typeof filterCheckedItems>
export const filterCheckedItems = (filterCheckedId: string[]) => {
    return {
        type: 'FILTER-CHECKED-ITEMS',
        filterCheckedId
    }as const
}
export type RemoveTasksStatusType = ReturnType<typeof removeTasksStatus>
export const removeTasksStatus =(remove:boolean)=>{
   return {
       type:'REMOVE-TASKS-STATUS',
       remove
   } as const
}

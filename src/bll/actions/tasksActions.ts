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

import {StateType} from "bll/store";
import {FilterTaskType, TaskType} from "bll/reducers/tasksReducer";

export const selectTasks =(state:StateType):TaskType[] => state.tasks.tasks
export const selectFilter =(state:StateType):FilterTaskType => state.tasks.filter
export const selectCheckedItems =(state:StateType):string[]=>state.tasks.checkedId

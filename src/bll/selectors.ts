import {StateType} from "bll/store";
import {TaskType} from "bll/reducers/tasksReducer";

export const selectTasks =(state:StateType):TaskType[] => state.tasks.tasks

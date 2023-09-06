import {combineReducers, legacy_createStore as createStore} from "redux";
import {TasksReducer} from "bll/reducers/tasksReducer";


const rootReducer=combineReducers({
    tasks:TasksReducer,

})
export type StateType =ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)





// @ts-ignore
window.store = store

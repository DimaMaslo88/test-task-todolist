import {TasksReducer, TasksStateType} from "bll/reducers/tasksReducer";
import {addTask, changeTaskStatus, changeTaskTitle, removeTasksStatus} from "bll/actions/tasksActions";

let startState : TasksStateType
beforeEach(() => {
    startState = {
        "tasks": [
            {id: '1', title: "Тестовое задание", isDone: false}
        ],
        filter: 'all',
        checkedId: []
    };
});
test('correct task should be added ', () => {
    const action = addTask("Learn JS");

    const endState = TasksReducer(startState, action)

    expect(endState.tasks.length).toBe(2);
    expect(endState.filter).toBe('all');

});
test('correct task-status should be deleted from array ', () => {
    const action = removeTasksStatus(true);
    const endState = TasksReducer(startState, action)
    expect(endState.tasks[0].isDone).toBe(true);


});

test(' task-title should be changed correctly ', () => {
    const action = changeTaskTitle('1',"Мое тестовое  задание");
    const endState = TasksReducer(startState, action)
    expect(endState.tasks[0].title).toBe('Мое тестовое  задание');

});
test(' task-status should be changed correctly ', () => {
    const action = changeTaskStatus('1',true);
    const endState = TasksReducer(startState, action)
    expect(endState.tasks[0].isDone).toBe(true);

});


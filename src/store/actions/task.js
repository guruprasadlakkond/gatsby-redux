import * as actionType from '../actionTypes';


export function addTask(task) {
    console.log(task);
    return {type:actionType.ADD_TASK, payload:task}
}

export function deleteTask(task) {

    return {type:actionType.DELETE_TASK, payload:task}
}

export function updateTask(task) {

    return {type:actionType.UPDATE_TASK, payload:task}
}